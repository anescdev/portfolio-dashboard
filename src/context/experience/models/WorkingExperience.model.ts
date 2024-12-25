import { Company } from "@context/company/models/company.model";
import { Experience } from "./Experience.model";

export type WorkingExperience = {
    startDate: Date
    finishDate?: Date
    company: Company
} & Experience