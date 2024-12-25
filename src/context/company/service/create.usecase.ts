import { CompanyRepository } from "@context/company/models/company.repository";
import { CreateCompanyDto} from "@context/company/models/dto/CreateCompanyDto";

export default function createCompanyUseCase(companyRepository: CompanyRepository) {
    return (company: CreateCompanyDto) => {
        if(typeof company.name !== "string") throw new Error("Datos de creación de compañía inválidos");
        return companyRepository.create(company);
    }
}