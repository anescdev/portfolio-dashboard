import { TechnologyRepository } from "../models/technology.repository";

export default function deleteTechnologyUseCase(technologyRepository: TechnologyRepository) {
    return (technologyId: number) => {
        if (typeof technologyId !== "number" || technologyId < 0) throw new Error("Id de tecnología no válido");
        return technologyRepository.delete(technologyId);
    }
}