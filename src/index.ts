import express from "express";
import database from "./config/database";
import config from "./config/knex/knexfile";

const port = 8000;
const app = express();

database.migrate.latest(config["development"].migrations).then(() => {
    app.listen(port, () => console.log(`listening port ${port}`));
});
