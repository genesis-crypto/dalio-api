import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        return res.send(":hehhe");
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllUsers };
