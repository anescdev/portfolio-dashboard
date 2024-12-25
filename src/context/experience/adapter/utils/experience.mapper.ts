import { mapCompanyFromApi } from "@context/company/adapter/utils/company.mapper";
import { PersonalExperience } from "@context/experience/models/PersonalExperience.model";
import { WorkingExperience } from "@context/experience/models/WorkingExperience.model";
import { mapTechnologyFromApi } from "@context/technology/adapters/utils/technology.mapper";

export function mapWorkingExperienceFromApi(json): WorkingExperience {
    return {
        id: json.id,
        name: json.name,
        description: json.description,
        technologies: json.technology.map(tech => mapTechnologyFromApi(tech)),
        startDate: new Date(json.startDate),
        finishDate: typeof json.finishDate === "string" ? new Date(json.finishDate) : undefined,
        company: mapCompanyFromApi(json.company)
    }
}

export function mapPersonalExperienceFromApi(json): PersonalExperience {
    return {
        id: json.id,
        name: json.name,
        description: json.description,
        technologies: json.technology.map(tech => mapTechnologyFromApi(tech)),
        projectLink: new URL(json.link)
    }
}