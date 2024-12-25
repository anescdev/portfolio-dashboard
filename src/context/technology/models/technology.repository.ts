import { BaseRepository } from "@context/shared/base.repository";
import { CreateTechnologyDTO } from "@context/technology/models/dto/CreateTechnologyDto";
import { Technology } from "@context/technology/models/technology.model";

export type TechnologyRepository = BaseRepository<Technology, Technology["id"], CreateTechnologyDTO>