import db from "../../config/database";

const getAll = async () => {
    try {
        return await db("books").select("*").limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const createBook = async ({
    nome,
    description,
    image_url,
}: {
    nome: string;
    description: string;
    image_url: string;
}) => {
    try {
        return await db("books")
            .insert({ nome, description, image_url })
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

export { getAll, createBook };
