import type { Knex } from "knex";
import path from "path";

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            host: "127.0.0.1",
            user: "postgres",
            password: "admin",
            database: "dalio",
            port: 15432,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: path.join(__dirname, "/migrations"),
            tableName: "migrations",
        },
        seeds: {
            directory: path.join(__dirname, "/seeds"),
        },
    },
};

export default config;
