export interface BaseRepository<Item, Id, CreateDTO> {
    find(page: number, pageSize: number): Promise<Item[]>;
    create(itemCreateDTO: CreateDTO): Promise<Item>;
    delete(itemId: Id): Promise<void>;
}