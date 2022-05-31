import { Request, Response } from "express";
import { refactorBook } from "../../model/books";

const updateBook = async (req: Request, res: Response) => {
    try {
        const { id, nome, description, image_url } = req.body as {
            id: string;
            nome: string;
            description: string;
            image_url: string;
        };

        if (
            typeof id === "undefined" ||
            (typeof nome === "undefined" &&
                typeof description === "undefined" &&
                typeof image_url === "undefined")
        ) {
            throw new Error("missing arguments");
        }

        const books = await refactorBook({
            id,
            payload: { nome, description, image_url },
        });

        return res.status(200).send({ code: 200, data: books });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { updateBook };
