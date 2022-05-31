import { Request, Response } from "express";
import { refactorSubcategory } from "../../model/subcategories";

const updateSubcategory = async (req: Request, res: Response) => {
    try {
        const { id, nome, description, id_category } = req.body as {
            id: string;
            nome: string;
            description: string;
            id_category: string;
        };

        if (
            typeof id === "undefined" ||
            (typeof nome === "undefined" &&
                typeof description === "undefined" &&
                typeof id_category === "undefined")
        ) {
            throw new Error("missing arguments");
        }

        const subcategory = await refactorSubcategory({
            id,
            payload: { nome, description, id_category },
        });

        return res.status(200).send({ code: 200, data: subcategory });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { updateSubcategory };
