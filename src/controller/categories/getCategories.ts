import { Request, Response } from "express";
import { getAll, getFromUser } from "../../model/categories";

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getAll();

        return res.status(200).send({ code: 200, data: categories });
    } catch (err) {
        throw new Error("Crash");
    }
};

const getUserCategories = async (req: Request, res: Response) => {
    try {
        const { id } = req.query as { id?: number };

        if (!id) {
            throw new Error("missing arguments");
        }

        const categoriesFromUser = await getFromUser(id);

        return res.status(200).send({ code: 200, data: categoriesFromUser });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllCategories, getUserCategories };
