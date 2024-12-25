export function mapCompanyFromApi(json) {
    return {
        id: json.id,
        name: json.name
    }
}