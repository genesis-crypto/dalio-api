import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("category").del();

    // Inserts seed entries
    await knex("category").insert([
        {
            id: 1,
            nome: "Inflacao",
            description:
                "Possivel aumento da taxa de juros do pais e reducao do ponder de consumo",
            id_user: 1,
        },
        {
            id: 2,
            nome: "Ambiente Macro Economico",
            description:
                "Enteder o ambiente macro e analisar as politicas economicas, monetarias e sociais.",
            id_user: 1,
        },
        {
            id: 3,
            nome: "Inequidade economica",
            description: "Distribuicao de riqueza na sociedade",
            id_user: 1,
        },
    ]);
}
