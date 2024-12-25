import { BaseRepository } from "@context/shared/base.repository";
import { PersonalExperience } from "./PersonalExperience.model";
import { CreatePersonalExperienceDTO } from "./dto/CreatePersonalExperience.dto";
import { WorkingExperience } from "./WorkingExperience.model";
import { CreateWorkingExperienceDTO } from "./dto/CreateWorkingExperience.dto";

export type WorkingExperienceRepository = BaseRepository<WorkingExperience, WorkingExperience["id"], CreateWorkingExperienceDTO>
export type PersonalExperienceRepository = BaseRepository<PersonalExperience, PersonalExperience["id"], CreatePersonalExperienceDTO>