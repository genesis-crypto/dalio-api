import knex from "knex";
import config from "../knex/knexfile";

export default knex(config["development"]);
