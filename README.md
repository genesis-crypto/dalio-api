## Dalio API

API feita em node.js e express.

## Requisitos

-   Node (16.14.2)
-   Docker
-   pgAdmin (Opcional)

## Visualizar o banco

Caso queira visualizar a persistencia em algum gerenciador de banco, os acessos para conexao sao:

-   Host: 127.0.0.1
-   Porta: 15432
-   Senha: admin

## Banco

Banco utiliziado foi o postgresql, para a API foi utilizado Knex um query builder que permite fazer multiplas conexoes com diversos bancos e criar um versionamento de banco de dados.

### Limitacoes

O knex apresenta uma limitacao relacionada a criacao do banco, por ser uma ferramenta para estabelecer conexoes e criar tables, o pacote carece um pouco na questao de gerenciamento e criacao do banco, entao para solucinar essa situacao o banco precisa ser criado manualmente dentro do container Docker.

## Setup do banco

```
npm run docker:up
```

> Script para subir a infraestrutura local

```
npm run database:create
```

> Script para criar o banco dentro do container docker

```
npm run database:populate
```

> Script para popular o banco criado com as tables

## API
