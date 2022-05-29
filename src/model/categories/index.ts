import db from "../../config/database";

const getAll = async () => {
    try {
        return await db("category").select("*").limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

const getFromUser = async (id: number) => {
    try {
        return await db("category")
            .select("*")
            .where("id_user", "=", id)
            .limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

export { getAll, getFromUser };
