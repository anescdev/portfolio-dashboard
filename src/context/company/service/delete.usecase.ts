import { CompanyRepository } from "@context/company/models/company.repository";
import { Company} from "@context/company/models/company.model";

export default function deleteCompanyUseCase(companyRepository: CompanyRepository) {
    return (companyId: Company["id"]) => {
        return companyRepository.delete(companyId);
    }
}