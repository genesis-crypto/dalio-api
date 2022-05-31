import db from "../../config/database";

const getAll = async () => {
    try {
        return await db("category").select("*").limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const getFromUser = async ({ id }: { id: number }) => {
    try {
        return await db("category")
            .select("*")
            .where("id_user", "=", id)
            .limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const createCategory = async ({
    nome,
    description,
    id_user,
}: {
    nome: string;
    description: string;
    id_user: string;
}) => {
    try {
        return await db("category")
            .insert({ nome, description, id_user })
            .then(() => true)
            .catch((err) => {
                console.log(err);
                return false;
            });
    } catch (err) {
        return new Error("something get wrong");
    }
};

const refactorCategory = async ({
    id,
    payload,
}: {
    id: string;
    payload: Partial<{
        nome: string;
        description: string;
        id_user: string;
    }>;
}) => {
    try {
        return await db("category")
            .update(payload)
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

export { getAll, getFromUser, createCategory, refactorCategory };
