import { Request, Response } from "express";
import { getAll, getFromUser } from "../../model/categories";
import { getFromCategory } from "../../model/subcategories";

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

        if (typeof id === "undefined") {
            throw new Error("missing arguments");
        }

        const categoriesFromUser = (await getFromUser({ id })) as any[];

        if (categoriesFromUser?.length !== 0) {
            const arrayIdCategories: number[] = categoriesFromUser.map(
                (item: { id: any }) => item.id
            );

            const subcategories = (await getFromCategory({
                ids: arrayIdCategories,
            })) as any[];

            const response = categoriesFromUser.map((category) => {
                const responseItem: Partial<{
                    id: number;
                    category: string;
                    category_description: string;
                    subcategory: {
                        subcategory: string;
                        subcategory_description: string;
                    }[];
                }> = {};
                responseItem.id = category.id;
                responseItem.category = category.nome;
                responseItem.category_description = category.description;

                const filterSubcategory = subcategories
                    ?.filter((item) => item.id_category == category.id)
                    ?.map((sub) => ({
                        subcategory: sub.nome,
                        subcategory_description: sub.description,
                    }));

                responseItem.subcategory = filterSubcategory;

                return responseItem;
            });

            return res.status(200).send({ code: 200, data: response });
        }

        return res.status(200).send({ code: 200, data: categoriesFromUser });
    } catch (err) {
        throw new Error("Crash");
    }
};

export { getAllCategories, getUserCategories };
