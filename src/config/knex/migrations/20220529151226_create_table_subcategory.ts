import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable("subcategory", (table) => {
        table.increments("id");
        table.string("nome").notNullable();
        table.text("description").notNullable();
        table
            .integer("id_category")
            .references("id")
            .inTable("category")
            .onDelete("CASCADE");
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists("subcategory");
}
