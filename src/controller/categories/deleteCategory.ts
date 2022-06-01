import { Request, Response } from "express";
import { removeCategory } from "../../model/categories";

const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.query as {
            id: string;
        };

        if (typeof id === "undefined") {
            throw new Error("missing arguments");
        }

        const category = await removeCategory({
            id,
        });

        return res.status(200).send({ code: 200, data: category });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { deleteCategory };
