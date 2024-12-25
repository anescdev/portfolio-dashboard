import { WorkingExperience } from "../WorkingExperience.model"
import { CreateExperienceDTO } from "./CreateExperience.dto"

export type CreateWorkingExperienceDTO = {
    startDate: WorkingExperience["startDate"]
    finishDate: WorkingExperience["finishDate"]
    company: WorkingExperience["company"]["id"]
} & CreateExperienceDTO;