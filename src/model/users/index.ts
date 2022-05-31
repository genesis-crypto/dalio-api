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
            .catch((err) => {
                console.log(err);
                return false;
            });
    } catch (err) {
        return new Error("something get wrong");
    }
};

export { getAll, insertUser };
