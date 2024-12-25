import { TechnologyRepository } from "@context/technology/models/technology.repository";
import { TechnologyHttpDatasource } from "@context/technology/adapters/technology.http";
import createTechnologyUseCase from "./create.usecase";
import deleteTechnologyUseCase from "./delete.usecase";
import findTechnologyUseCase from "./find.usecase";

const repo: TechnologyRepository = new TechnologyHttpDatasource();

export const findTechnology = findTechnologyUseCase(repo);
export const createTechnology = createTechnologyUseCase(repo);
export const deleteTechnology = deleteTechnologyUseCase(repo);