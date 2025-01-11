import { prisma } from "../libs/prismaClient"

export const getAllBooks = async (req: any, res: any) => {
    const allBooks = await prisma.book.findMany();
    res.json(allBooks);
}

export const AddBook = async (req: any, res: any) => {
    
}
