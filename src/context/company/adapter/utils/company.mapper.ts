import { Company } from "@context/company/models/company.model";
//@ts-expect-error Json must to be typed but for now is ok
// TODO: Company mapper
export function mapCompanyFromApi(json): Company {
    return {
        id: json.id,
        name: json.name
    }
}