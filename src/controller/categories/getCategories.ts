import { Request, Response } from "express";
import { getAll } from "../../model/categories";

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getAll();

        return res.status(200).send({ code: 200, data: categories });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllCategories };
