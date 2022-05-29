import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            nome: "Ray Dalio",
            image_url:
                "https://i.pinimg.com/564x/04/a5/71/04a571bc1267cc2faa950ad9799f0a52.jpg",
        },
        {
            id: 2,
            nome: "Warren Buffett",
            image_url:
                "https://i.pinimg.com/564x/3b/a1/44/3ba144b5cfe0a10265c21ead46338bfa.jpg",
        },
        {
            id: 3,
            nome: "Joel Greenblatt",
            image_url:
                "https://i.pinimg.com/564x/c5/1c/cb/c51ccb863c289ccf0057b1ff26403213.jpg",
        },
        {
            id: 4,
            nome: "Michael Burry",
            image_url:
                "https://i.pinimg.com/564x/99/02/6e/99026ed2ae76520cd52a6bd10700db67.jpg",
        },
        {
            id: 5,
            nome: "Nassim Nicholas Taleb",
            image_url:
                "https://i.pinimg.com/564x/61/c3/0f/61c30fe45acaca4687993674c7c6ad39.jpg",
        },
    ]);
}
