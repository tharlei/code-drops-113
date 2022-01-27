import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string): Promise<void | Error> {
        const repo = getRepository(Category)

        if (!(await repo.findOne(id))) {
            return new Error("Categoria não existe")
        }

        await repo.delete(id)
    }
}