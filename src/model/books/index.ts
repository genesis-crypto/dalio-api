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

const refactorBook = async ({
    id,
    payload,
}: {
    id: string;
    payload: Partial<{ nome: string; description: string; image_url: string }>;
}) => {
    try {
        return await db("books")
            .update(payload)
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const removeBook = async ({ id }: { id: string }) => {
    try {
        return await db("books")
            .delete()
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const getNumberSuggestions = async ({ id }: { id: string | number }) => {
    return await db("user_books")
        .count("*")
        .groupBy("id_book")
        .where("id_book", "=", id);
};

export { getAll, createBook, refactorBook, removeBook, getNumberSuggestions };
