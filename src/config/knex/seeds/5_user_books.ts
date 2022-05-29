import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_books").del();

    // Inserts seed entries
    await knex("user_books").insert([
        { id: 1, id_user: 1, id_book: 1 },
        { id: 2, id_user: 2, id_book: 2 },
        { id: 3, id_user: 3, id_book: 3 },
    ]);
}
