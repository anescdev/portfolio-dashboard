import { HttpClient } from "@context/shared/client/http.client";
import { CreateWorkingExperienceDTO } from "../models/dto/CreateWorkingExperience.dto";
import { WorkingExperienceRepository } from "../models/Experience.repository";
import { WorkingExperience } from "../models/WorkingExperience.model";
import { dateFormat } from "./utils/dateFormat";
import { mapWorkingExperienceFromApi } from "./utils/experience.mapper";

export class WorkingExperienceHttpDatasource implements WorkingExperienceRepository {
    async find(page: number, pageSize: number): Promise<WorkingExperience[]> {
        const findWorkingExperience = await HttpClient.instance().request(`/experience?experienceType=working&page=${page}&pageSize=${pageSize}`);
        if(!findWorkingExperience.ok) return [];
        const findWorkingExperienceBody = await findWorkingExperience.json();
        if(!Array.isArray(findWorkingExperienceBody)) return [];
        return findWorkingExperienceBody.map(workingExperience => mapWorkingExperienceFromApi(workingExperience));
    }
    async create(itemCreateDTO: CreateWorkingExperienceDTO): Promise<WorkingExperience> {
        const formData = new FormData();
        formData.set("experienceName", itemCreateDTO.name);
        formData.set("experienceDescription", itemCreateDTO.description);
        formData.set("experienceTechs", itemCreateDTO.technologies.join(","));
        formData.set("experienceCompany", `${itemCreateDTO.company}`);
        formData.set("experienceStartDate", dateFormat(itemCreateDTO.startDate));
        if(itemCreateDTO.finishDate !== undefined) formData.set("experienceEndDate", dateFormat(itemCreateDTO.finishDate));
        const createWorkingExperienceRequest = await HttpClient.instance().request("/experience/workingExperience",
            {
                method: "POST",
                body: formData,
                credentials: "include"
            }
        )
        if(!createWorkingExperienceRequest.ok) throw new Error("The working experience can't be added");
        const createWorkingExperienceBody = await createWorkingExperienceRequest.json();
        return mapWorkingExperienceFromApi(createWorkingExperienceBody);
    }
    async delete(itemId: number): Promise<void> {
        const formData = new FormData();
        formData.set("experienceId", `${itemId}`);
        const deleteExperienceRequest = await HttpClient.instance().request("/experience/workingExperience", {
            method: "DELETE", 
            body: formData,
            credentials: "include"
        })
        if(!deleteExperienceRequest.ok) throw new Error("The working experience can't be deleted");
    }
}