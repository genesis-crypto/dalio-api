import { Request, Response } from "express";
import { getAll, getNumberSuggestions } from "../../model/books";

const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = (await getAll()) as {
            id: number | string;
            nome: string;
            description: string;
            image_url: string;
        }[];
        console.log(`books`, books);
        if (typeof books !== "undefined") {
            const response = await Promise.all(
                books.map(async (item) => {
                    const [response] = await getNumberSuggestions({
                        id: item.id,
                    });

                    return { ...item, numberOfSuggestions: response?.count };
                })
            );

            return res.status(200).send({ code: 200, data: response });
        }
        return res.status(200).send({ code: 200, data: books });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllBooks };
