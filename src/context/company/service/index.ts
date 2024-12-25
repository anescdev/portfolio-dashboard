import { CompanyRepository } from "@context/company/models/company.repository";
import { CompanyHttpDatasource } from "@context/company/adapter/company.http";
import createCompanyUseCase from "./create.usecase";
import deleteCompanyUseCase from "./delete.usecase";
import findCompanyUseCase from "./find.usecase";

const repo: CompanyRepository = new CompanyHttpDatasource();

export const createCompany = createCompanyUseCase(repo);
export const deleteCompany = deleteCompanyUseCase(repo);
export const findCompany = findCompanyUseCase(repo);