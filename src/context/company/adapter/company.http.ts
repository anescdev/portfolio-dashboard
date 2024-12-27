import { CompanyRepository } from "@context/company/models/company.repository";
import { Company } from "@context/company/models/company.model";
import { CreateCompanyDto } from "@context/company/models/dto/CreateCompanyDto";
import { HttpClient } from "@context/shared/client/http.client";

export class CompanyHttpDatasource implements CompanyRepository {
    //@ts-expect-error Page parameter must to be User
    // TODO: Fix API for accept these parameters
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async find(page: number, pageSize: number): Promise<Company[]> {
        const findCompaniesRequest = await HttpClient.instance().request("/api/company", {
            method: "GET"
        });
        if (!findCompaniesRequest.ok) return [];
        const findCompaniesBody = await findCompaniesRequest.json();
        if (!Array.isArray(findCompaniesBody)) return [];
        return findCompaniesBody.map(company => {
            return {
                id: company.id,
                name: company.name
            }
        })
    }
    async create(itemCreateDto: CreateCompanyDto): Promise<Company> {
        const formData = new FormData();
        formData.set("name", itemCreateDto.name);
        const createCompanyRequest = await HttpClient.instance().request("/api/company", {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!createCompanyRequest.ok) throw new Error("No se pudo añadir la compañía");
        const createCompanyBody = await createCompanyRequest.json();
        return {
            id: createCompanyBody.id,
            name: createCompanyBody.name
        }
    }
    async delete(itemId: number): Promise<void> {
        const formData = new FormData();
        formData.set("companyId", `${itemId}`);
        const deleteCompanyRequest = await HttpClient.instance().request("/api/company", {
            method: "DELETE",
            body: formData,
            credentials: "include"
        });
        if (!deleteCompanyRequest.ok) throw new Error("No se pudo borrar la compañía");
    }

}