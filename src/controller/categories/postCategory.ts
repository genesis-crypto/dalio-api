import { Request, Response } from "express";
import { createCategory } from "../../model/categories";

const postCategory = async (req: Request, res: Response) => {
    try {
        const { nome, description, id_user } = req.body as {
            nome: string;
            description: string;
            id_user: string;
        };

        if (
            typeof nome === "undefined" ||
            typeof description === "undefined" ||
            typeof id_user === "undefined"
        ) {
            throw new Error("missing arguments");
        }
        const categories = await createCategory({ nome, description, id_user });

        return res.status(200).send({ code: 200, data: categories });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { postCategory };
