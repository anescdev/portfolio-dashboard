import { Company } from "@context/company/models/company.model"

export type CreateCompanyDto = {
    name: Company["name"]
}