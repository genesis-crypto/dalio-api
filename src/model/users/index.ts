import db from "../../config/database";

const getAll = async () => {
    try {
        return await db("users").select("*").limit(40);
    } catch (err) {
        return new Error("something get wrong");
    }
};

export { getAll };
