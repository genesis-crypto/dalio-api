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

export { getAll, getFromCategory };
