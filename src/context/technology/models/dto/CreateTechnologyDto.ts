import { Technology } from "@context/technology/models/technology.model"

export interface CreateTechnologyDTO {
    techName: Technology["name"]
    techLogo: File
}