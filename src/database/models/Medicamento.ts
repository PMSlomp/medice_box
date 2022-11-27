import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Medicamento extends BaseModel {
  constructor(obj: any) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "medicamentos";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true, autoincrement: true },
      nome: { type: types.TEXT, not_null: true },
      laboratorio: { type: types.TEXT, not_null: true },
      tipo: { type: types.TEXT, not_null: true },
    };
  }
}