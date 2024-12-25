import { PersonalExperience } from "../PersonalExperience.model";
import { CreateExperienceDTO } from "./CreateExperience.dto";

export type CreatePersonalExperienceDTO = {
    projectLink: PersonalExperience["projectLink"]
} & CreateExperienceDTO;
