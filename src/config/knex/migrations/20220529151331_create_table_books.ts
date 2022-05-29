import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable("books", (table) => {
        table.increments("id");
        table.string("nome").notNullable();
        table.string("description").notNullable();
        table.string("image_url");
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists("books");
}
