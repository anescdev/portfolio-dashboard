import { Technology } from "@context/technology/models/technology.model";
import { Experience } from "../Experience.model";

export type CreateExperienceDTO = {
    technologies: Technology["id"][]
} & Omit<Experience, "id" | "technologies">