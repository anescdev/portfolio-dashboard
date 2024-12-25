import { HttpClient } from "@context/shared/client/http.client";
import { CreatePersonalExperienceDTO } from "../models/dto/CreatePersonalExperience.dto";
import { PersonalExperienceRepository } from "../models/Experience.repository";
import { PersonalExperience } from "../models/PersonalExperience.model";
import { mapPersonalExperienceFromApi } from "./utils/experience.mapper";

export class PersonalExperienceHttpDatasource implements PersonalExperienceRepository {
    async find(page: number, pageSize: number): Promise<PersonalExperience[]> {
        const findPersonalExperience = await HttpClient.instance().request(`/api/experience?experienceType=personal&page=${page}&pageSize=${pageSize}`);
        if (!findPersonalExperience.ok) return [];
        const findPersonalExperienceBody = await findPersonalExperience.json();
        if (!Array.isArray(findPersonalExperienceBody)) return [];
        return findPersonalExperienceBody.map(personalExperience => mapPersonalExperienceFromApi(personalExperience));
    }
    async create(itemCreateDTO: CreatePersonalExperienceDTO): Promise<PersonalExperience> {
        const formData = new FormData();
        formData.set("experienceName", itemCreateDTO.name);
        formData.set("experienceDescription", itemCreateDTO.description);
        formData.set("experienceTechs", itemCreateDTO.technologies.join(","));
        formData.set("experienceLink", itemCreateDTO.projectLink.toString());
        const createPersonalExperienceRequest = await HttpClient.instance().request("/api/experience/personalExperience",
            {
                method: "POST",
                body: formData,
                credentials: "include"
            }
        )
        if (!createPersonalExperienceRequest.ok) throw new Error("The personal experience can't be added");
        const createPersonalExperienceBody = await createPersonalExperienceRequest.json();
        return mapPersonalExperienceFromApi(createPersonalExperienceBody);
    }

    async delete(itemId: number): Promise<void> {
        const formData = new FormData();
        formData.set("experienceId", `${itemId}`);
        const deleteExperienceRequest = await HttpClient.instance().request("/api/experience/personalExperience", {
            method: "DELETE",
            body: formData,
            credentials: "include"
        })
        if (!deleteExperienceRequest.ok) throw new Error("The personal experience can't be deleted");
    }

}