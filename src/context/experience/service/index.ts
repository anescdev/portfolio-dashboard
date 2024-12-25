import { PersonalExperienceHttpDatasource } from "../adapter/PersonalExperience.http";
import { WorkingExperienceHttpDatasource } from "../adapter/WorkingExperience.http";
import { PersonalExperienceRepository, WorkingExperienceRepository } from "../models/Experience.repository";
import { createPersonalExperienceUseCase, createWorkingExperienceUseCase } from "./create.usecase";
import { deletePersonalExperienceUseCase, deleteWorkingExperienceUseCase } from "./delete.usecase";
import { findPersonalExperiencesUseCase, findWorkingExperiencesUseCase } from "./find.usecase";

const workingExperienceRepository: WorkingExperienceRepository = new WorkingExperienceHttpDatasource();
const personalExperienceRepository: PersonalExperienceRepository = new PersonalExperienceHttpDatasource();

export const findWorkingExperiences = findWorkingExperiencesUseCase(workingExperienceRepository);
export const findPersonalExperiences = findPersonalExperiencesUseCase(personalExperienceRepository)

export const createWorkingExperience = createWorkingExperienceUseCase(workingExperienceRepository);
export const createPersonalExperience = createPersonalExperienceUseCase(personalExperienceRepository);

export const deleteWorkingExperience = deleteWorkingExperienceUseCase(workingExperienceRepository);
export const deletePersonalExperience = deletePersonalExperienceUseCase(personalExperienceRepository);