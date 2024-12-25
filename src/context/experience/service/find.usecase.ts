import { PersonalExperienceRepository, WorkingExperienceRepository } from "../models/Experience.repository"

export function findWorkingExperiencesUseCase(experienceRepository: WorkingExperienceRepository) {
    return (page: number, pageSize: number) => {
        if (typeof page !== "number" || typeof pageSize !== "number") throw new Error("Invalid experience find parameters");
        return experienceRepository.find(page, pageSize);
    }
}

export function findPersonalExperiencesUseCase(experienceRepository: PersonalExperienceRepository) {
    return (page: number, pageSize: number) => {
        if (typeof page !== "number" || typeof pageSize !== "number") throw new Error("Invalid experience find parameters");
        return experienceRepository.find(page, pageSize);
    }
}