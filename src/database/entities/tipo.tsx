import { EntitySchema } from "typeorm";

const Tipo = new EntitySchema({
  name: "Tipo", // Entity name (your "Model")
  tableName: "tipo", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    tipo: {
      type: "varchar",
    },
  },
});

export default Tipo;