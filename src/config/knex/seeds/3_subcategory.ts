import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("subcategory").del();

    // Inserts seed entries
    await knex("subcategory").insert([
        {
            id: 1,
            nome: "O que esta causando a inflacao hoje?",
            description:
                "Existe uma forte ligacao ao efeito da pandemia muitas empresas reduziram sua cadeia produtiva, causando uma elevacao dos precos (alta demanda baixa oferta)",
            id_category: 1,
        },
        {
            id: 2,
            nome: "Analisar indicadores",
            description: "Acompanhar a taxa do IPCA e SELIC",
            id_category: 1,
        },
        {
            id: 3,
            nome: "Indicadores de inflacao",
            description:
                "Analisar a taxa de inflacao e a taxa base de juros a fim de balancear (Risco x Retorno)",
            id_category: 2,
        },
        {
            id: 4,
            nome: "Indicadores de empregabilidade",
            description:
                "A taxa de empregabilidade esta muito relacionada as politicas de acesso a credito e estimulos monetarios",
            id_category: 2,
        },
    ]);
}
