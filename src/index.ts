import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router";
import database from "./config/database";
import config from "./config/knex/knexfile";

const port = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use("/v1", router);

database.migrate.latest(config["development"].migrations).then(() => {
    app.listen(port, () => console.log(`listening port ${port}`));
});
