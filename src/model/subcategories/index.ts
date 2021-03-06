import db from "../../config/database";

const getAll = async () => {
    try {
        return await db("subcategory").select("*").limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const getFromCategory = async ({ ids }: { ids: number[] }) => {
    try {
        return await db("subcategory")
            .select("*")
            .whereIn("id_category", ids)
            .limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const createSubcategory = async ({
    nome,
    description,
    id_category,
}: {
    nome: string;
    description: string;
    id_category: string;
}) => {
    try {
        return await db("subcategory")
            .insert({ nome, description, id_category })
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const refactorSubcategory = async ({
    id,
    payload,
}: {
    id: string;
    payload: Partial<{
        nome: string;
        description: string;
        id_category: string;
    }>;
}) => {
    try {
        return await db("subcategory")
            .update(payload)
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const removeSubcategory = async ({ id }: { id: string }) => {
    try {
        return await db("subcategory")
            .delete()
            .where("id", "=", id)
            .then(() => true)
            .catch(() => false);
    } catch (err) {
        return new Error("something get wrong");
    }
};

export {
    getAll,
    getFromCategory,
    createSubcategory,
    refactorSubcategory,
    removeSubcategory,
};
