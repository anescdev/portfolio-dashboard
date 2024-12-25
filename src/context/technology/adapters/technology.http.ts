import { ServerErrorException } from "@context/shared/exceptions/serverError.exception";
import { HttpClient } from "@context/shared/client/http.client";
import { CreateTechnologyDTO } from "@context/technology/models/dto/CreateTechnologyDto";
import { Technology } from "@context/technology/models/technology.model";
import { TechnologyRepository } from "@context/technology/models/technology.repository";

export class TechnologyHttpDatasource implements TechnologyRepository {
    #client = HttpClient.instance();
    async find(page: number, pageSize: number): Promise<Technology[]> {
        const findTechRequest = await this.#client.request(`/api/technology?page=${page}&pageSize=${pageSize}`);
        if (findTechRequest.status !== 200) {
            throw new ServerErrorException();
        }
        const techsFetched = await findTechRequest.json();
        if (!Array.isArray(techsFetched)) return [];
        return techsFetched.map(tech => {
            return {
                id: tech.id,
                name: tech.name,
                icon: tech.logo
            }
        });
    }

    async create(technologyFormData: CreateTechnologyDTO): Promise<Technology> {
        const formData = new FormData();
        formData.set("techName", technologyFormData.techName);
        formData.set("techLogo", technologyFormData.techLogo);
        const createTechRequest = await this.#client.request("/api/technology", {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        console.log(createTechRequest);
        if (!createTechRequest.ok) throw new Error("No se pudo añadir la tecnología");
        const createTechBody = await createTechRequest.json();
        return {
            id: createTechBody.id,
            name: createTechBody.name,
            icon: createTechBody.logo
        }
    }

    async delete(technologyId: Technology["id"]): Promise<void> {
        const formData = new FormData();
        formData.set("techId", `${technologyId}`);
        const deleteTechnologyRequest = await HttpClient.instance().request("/api/technology", {
            method: "DELETE",
            credentials: "include",
            body: formData
        })
        if(!deleteTechnologyRequest.ok) throw new Error("No se ha podido eliminar la tecnología");
    }
}