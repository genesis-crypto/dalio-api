import { Request, Response } from "express";
import { createSubcategory } from "../../model/subcategories";

const postSubcategory = async (req: Request, res: Response) => {
    try {
        const { nome, description, id_category } = req.body as {
            nome: string;
            description: string;
            id_category: string;
        };

        if (
            typeof nome === "undefined" ||
            typeof description === "undefined" ||
            typeof id_category === "undefined"
        ) {
            throw new Error("missing arguments");
        }
        const subcategories = await createSubcategory({
            nome,
            description,
            id_category,
        });

        return res.status(200).send({ code: 200, data: subcategories });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { postSubcategory };
