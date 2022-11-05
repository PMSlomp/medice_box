import * as SQLite from "expo-sqlite";

// your entities will be imported here (Car is an example)
import Tipo from "./entities/tipo";

const config = {
  database: "mydatabase",
  driver: SQLite,
  entities: [Tipo], // your entities will be added here (Car is an example)
  synchronize: true,
  type: "expo",
};

export default config;