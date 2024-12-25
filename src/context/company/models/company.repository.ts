import { BaseRepository } from "@context/shared/base.repository";
import { Company } from "@context/company/models/company.model";
import { CreateCompanyDto } from "@context/company/models/dto/CreateCompanyDto";

export type CompanyRepository = BaseRepository<Company, Company["id"], CreateCompanyDto>