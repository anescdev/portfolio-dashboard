import { Technology } from "@context/technology/models/technology.model";

//@ts-expect-error Json must to be typed but for now is ok
// TODO: Technology mapper
export function mapTechnologyFromApi(json): Technology {
    return {
        id: json.id,
        name: json.name,
        icon: json.logo
    }
}