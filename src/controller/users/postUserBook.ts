import { Request, Response } from "express";
import { suggestBookUser } from "../../model/users";

const postUserBook = async (req: Request, res: Response) => {
    try {
        const { idBook, idUser } = req.body as {
            idBook: number;
            idUser: number;
        };

        if (typeof idBook === "undefined" || typeof idUser === "undefined") {
            throw new Error("Missing arguments");
        }

        const created = await suggestBookUser({ idBook, idUser });

        return res.status(200).send({ code: 200, data: created });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { postUserBook };
