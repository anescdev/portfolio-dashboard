import { mapCompanyFromApi } from "@context/company/adapter/utils/company.mapper";
import { PersonalExperience } from "@context/experience/models/PersonalExperience.model";
import { WorkingExperience } from "@context/experience/models/WorkingExperience.model";
import { mapTechnologyFromApi } from "@context/technology/adapters/utils/technology.mapper";
//@ts-expect-error Json must to be typed but for now is ok
// TODO: Working experience mapper 1
export function mapWorkingExperienceFromApi(json): WorkingExperience {
    return {
        id: json.id,
        name: json.name,
        description: json.description,
        //@ts-expect-error Json must to be typed but for now is ok
        // TODO: Working experience mapper 2
        technologies: json.technology.map(tech => mapTechnologyFromApi(tech)),
        startDate: new Date(json.startDate),
        finishDate: typeof json.finishDate === "string" ? new Date(json.finishDate) : undefined,
        company: mapCompanyFromApi(json.company)
    }
}
//@ts-expect-error Json must to be typed but for now is ok
// TODO: Personal experience mapper 1
export function mapPersonalExperienceFromApi(json): PersonalExperience {
    return {
        id: json.id,
        name: json.name,
        description: json.description,
        //@ts-expect-error Json must to be typed but for now is ok
        // TODO: Personal experience mapper 2
        technologies: json.technology.map(tech => mapTechnologyFromApi(tech)),
        projectLink: new URL(json.link)
    }
}