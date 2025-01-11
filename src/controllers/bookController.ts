import { prisma } from "../libs/prismaClient"

export const getAllBooks = async (req: any, res: any) => {
    const allBooks = await prisma.book.findMany();

    return res.status(201).json(allBooks)
}

export const addBook = async (req: any, res: any) => {
    const { name, available } = req.body;

    try {
        const newBook = await prisma.book.create({
            data: {
                name: name,
                available: available
            }
        });

        return res.status(201).json(newBook);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error creating book' });
    }
};