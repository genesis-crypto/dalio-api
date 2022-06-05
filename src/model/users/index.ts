import db from "../../config/database";

const getAll = async () => {
    try {
        return await db("users").select("*").limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const insertUser = async ({
    nome,
    image_url,
}: {
    nome: string;
    image_url: string;
}) => {
    try {
        return await db("users")
            .insert({ nome: nome, image_url: image_url })
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const removeUser = async ({ id }: { id: string }) => {
    try {
        return await db("users")
            .delete()
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const refactorUser = async ({
    id,
    payload,
}: {
    id: string;
    payload: Partial<{
        nome: string;
        image_url: string;
    }>;
}) => {
    try {
        return await db("users")
            .update(payload)
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const suggestBookUser = async ({
    idBook,
    idUser,
}: {
    idUser: number;
    idBook: number;
}) => {
    try {
        return await db("user_books")
            .insert({
                id_user: idUser,
                id_book: idBook,
            })
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

export { getAll, insertUser, removeUser, refactorUser, suggestBookUser };
