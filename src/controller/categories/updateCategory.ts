import { Request, Response } from "express";
import { refactorCategory } from "../../model/categories";

const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id, nome, description, id_user } = req.body as {
            id: string;
            nome: string;
            description: string;
            id_user: string;
        };

        if (
            typeof id === "undefined" ||
            (typeof nome === "undefined" &&
                typeof description === "undefined" &&
                typeof id_user === "undefined")
        ) {
            throw new Error("missing arguments");
        }

        const subcategory = await refactorCategory({
            id,
            payload: { nome, description, id_user },
        });

        return res.status(200).send({ code: 200, data: subcategory });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { updateCategory };
