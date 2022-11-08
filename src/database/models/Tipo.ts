import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Tipo extends BaseModel {
  constructor(obj: any) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "tipos";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true, autoincrement: true }, // For while only supports id as primary key
      label: { type: types.TEXT, not_null: true },
    };
  }
}