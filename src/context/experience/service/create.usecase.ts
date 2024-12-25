import { CreatePersonalExperienceDTO } from "../models/dto/CreatePersonalExperience.dto";
import { CreateWorkingExperienceDTO } from "../models/dto/CreateWorkingExperience.dto";
import { PersonalExperienceRepository, WorkingExperienceRepository } from "../models/Experience.repository";

function checkCommonsFields(createExperienceDTO: CreatePersonalExperienceDTO | CreateWorkingExperienceDTO) {
    if(typeof createExperienceDTO.name !== "string" || 
        typeof createExperienceDTO.description !== "string" || 
        !Array.isArray(createExperienceDTO.technologies)) throw new Error("Invalid experience data creation");
}

export function createWorkingExperienceUseCase(experienceRepository: WorkingExperienceRepository) {
    return (createExperienceDTO: CreateWorkingExperienceDTO ) => {
        checkCommonsFields(createExperienceDTO);
        if(typeof createExperienceDTO.company !== "number" ||
            !(createExperienceDTO.startDate instanceof Date) || 
            (createExperienceDTO.finishDate != undefined && !(createExperienceDTO.finishDate instanceof Date))
        ) throw new Error("Invalid working experience data creation");
        return experienceRepository.create(createExperienceDTO);
    }
}

export function createPersonalExperienceUseCase(experienceRepository: PersonalExperienceRepository) {
    return (createExperienceDTO: CreatePersonalExperienceDTO) => {
        checkCommonsFields(createExperienceDTO);
        if(!(createExperienceDTO.projectLink instanceof URL)) throw new Error("Invalid personal experience data creation");
        return experienceRepository.create(createExperienceDTO);
    }
}