import { Request, Response } from "express";
import { createBook } from "../../model/books";

const postBook = async (req: Request, res: Response) => {
    try {
        const { nome, description, image_url } = req.body as {
            nome: string;
            description: string;
            image_url: string;
        };

        if (
            typeof nome === "undefined" ||
            typeof description === "undefined" ||
            typeof image_url === "undefined"
        ) {
            throw new Error("missing arguments");
        }

        const books = await createBook({ nome, description, image_url });

        return res.status(200).send({ code: 200, data: books });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { postBook };
