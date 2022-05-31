import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("books").del();

    // Inserts seed entries
    await knex("books").insert([
        {
            nome: "Princípios - Ray Dalio",
            description:
                "Para Ray Dalio, vida, gestão, economia e investimentos podem ser sistematizados em regras. Entre as centenas de lições do livro, erguidas em torno de seus alicerces de “verdade radical” e “transparência radical”, Dalio oferece uma abordagem clara e direta para a tomada de decisões e ensinamentos valiosos para a formação de equipes sólidas e eficientes.",
            image_url:
                "https://m.media-amazon.com/images/P/B07F7NBK1S.01._SCLZZZZZZZ_SX500_.jpg",
        },
        {
            nome: "A lógica do Cisne Negro - Taleb",
            description:
                "Um Cisne Negro é um evento que reúne três características principais: é altamente improvável, produz um enorme impacto e, depois que acontece, inventamos uma explicação que o faça parecer menos aleatório e mais previsível do que de fato é. Para Nassim Nicholas Taleb, esse fenômeno está na base de quase tudo que acontece no mundo ― da ascensão das religiões aos acontecimentos em nossas próprias vidas. O incrível êxito do Google, por exemplo, foi um Cisne Negro, assim como o Onze de Setembro.",
            image_url:
                "https://images-na.ssl-images-amazon.com/images/I/419unNk3A8S._SX346_BO1,204,203,200_.jpg",
        },
        {
            nome: "Tudo o que você precisa saber sobre economia",
            description:
                "Tudo o que você precisa saber sobre Economia, mas nunca explicaram! Economia é a lei que rege boa parte da nossa vida em sociedade, e dela dependemos para continuar nos sustentando e vivendo no sistema capitalista. Mas como uma coisa tão importante é tão pouco conhecida? Como as pessoas podem estar tão confusas sobre algo tão importante para suas vidas quanto o dinheiro? A maioria dos livros transforma os detalhes da economia em algo tão tedioso que teria deixado até John Maynard Keynes com sono. Tudo o que você precisa saber sobre economia elimina as explicações monótonas e, em vez disso, fornece uma lição prática que o mantém interessado em explorar como as sociedades alocam seus recursos para o máximo benefício. Domine os temas universais da Economia e sinta como se tivesse aprendido a ler novamente, porém agora você vai ler o mundo e seu funcionamento",
            image_url:
                "https://images-na.ssl-images-amazon.com/images/I/519xjxb+lKL._SX346_BO1,204,203,200_.jpg",
        },
    ]);
}
