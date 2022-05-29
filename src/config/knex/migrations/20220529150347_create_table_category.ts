import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable("category", (table) => {
        table.increments("id");
        table.string("nome").notNullable();
        table.string("description").notNullable();
        table.integer("id_user").references("id").inTable("users");
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists("category");
}
