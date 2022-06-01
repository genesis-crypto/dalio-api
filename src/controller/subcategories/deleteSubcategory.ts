import { Request, Response } from "express";
import { removeSubcategory } from "../../model/subcategories";

const deleteSubcategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.query as {
            id: string;
        };

        if (typeof id === "undefined") {
            throw new Error("missing arguments");
        }

        const subcategory = await removeSubcategory({
            id,
        });

        return res.status(200).send({ code: 200, data: subcategory });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { deleteSubcategory };
