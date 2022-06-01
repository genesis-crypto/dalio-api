import { Request, Response } from "express";
import { removeBook } from "../../model/books";

const deleteBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.query as {
            id: string;
        };

        if (typeof id === "undefined") {
            throw new Error("missing arguments");
        }

        const book = await removeBook({
            id,
        });

        return res.status(200).send({ code: 200, data: book });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { deleteBook };
