import { Request, Response } from "express";
import { getAll } from "../../model/books";

const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await getAll();

        return res.status(200).send({ code: 200, data: books });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllBooks };
