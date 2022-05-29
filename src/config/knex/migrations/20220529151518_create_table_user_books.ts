import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable("user_books", (table) => {
        table.increments("id");
        table.integer("id_user").references("id").inTable("users");
        table.integer("id_book").references("id").inTable("books");
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists("user_books");
}
