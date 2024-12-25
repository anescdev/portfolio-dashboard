import { PersonalExperienceRepository, WorkingExperienceRepository } from "../models/Experience.repository";
import { PersonalExperience } from "../models/PersonalExperience.model";
import { WorkingExperience } from "../models/WorkingExperience.model";

export function deleteWorkingExperienceUseCase(experienceRepository: WorkingExperienceRepository) {
    return (experienceId: WorkingExperience["id"]) => {
        if(typeof experienceId !== "number") throw new Error("Invalid working experience id");
        return experienceRepository.delete(experienceId);
    }
}

export function deletePersonalExperienceUseCase(experienceRepository: PersonalExperienceRepository) {
    return (experienceId: PersonalExperience["id"]) => {
        if(typeof experienceId !== "number") throw new Error("Invalid personal experience id");
        return experienceRepository.delete(experienceId);
    }
}