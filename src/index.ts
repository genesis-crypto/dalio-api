import express from "express";
import router from "./router";
import database from "./config/database";
import config from "./config/knex/knexfile";

const port = 8000;
const app = express();

app.use("/v1", router);

database.migrate.latest(config["development"].migrations).then(() => {
    app.listen(port, () => console.log(`listening port ${port}`));
});
