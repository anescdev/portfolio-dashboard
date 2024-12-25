import { Technology } from "@context/technology/models/technology.model"

export type Experience = {
    id: number
    name: string
    description: string
    technologies: Technology[]
}