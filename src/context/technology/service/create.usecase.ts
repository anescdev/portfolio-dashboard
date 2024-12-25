import { CreateTechnologyDTO } from "@context/technology/models/dto/CreateTechnologyDto";
import { TechnologyRepository } from "@context/technology/models/technology.repository";

export default function createTechnologyUseCase(technologyRepository: TechnologyRepository) {
    return (technology: CreateTechnologyDTO) => {
        if (typeof technology.techName !== "string" || !(technology.techLogo instanceof File)) throw new Error("Datos de creación de tecnologías inválidos");
        return technologyRepository.create(technology);
    }
}