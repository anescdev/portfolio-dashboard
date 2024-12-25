import { CompanyRepository } from "@context/company/models/company.repository";

export default function findCompanyUseCase(companyRepository: CompanyRepository) {
    return (page: number, pageSize: number) => {
        return companyRepository.find(page, pageSize);
    }
}