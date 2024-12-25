import { Technology } from "@context/technology/models/technology.model";

export function mapTechnologyFromApi(json): Technology {
    return {
        id: json.id,
        name: json.name,
        icon: json.logo
    }
}