import { TechnologyRepository } from "@context/technology/models/technology.repository";


export default function findTechnologyUseCase(technologyRepository: TechnologyRepository) {
    return (page: number, pageSize: number) => {
        return technologyRepository.find(page, pageSize);
    }
}