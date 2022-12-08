import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

import * as AS from "./styles";

import Tipo from "../../../database/models/Tipo";
import SelectFieldTipo from '../../../global/components/selectTipo';

interface Input {
  nome: String;
  value: Array<{ id: number; label: string }>;
}

export function AddSelect({ nome, value }: Input) {
  const [tipos, setTipos] = useState<any>([]);
  const fetchTipo = async () => {
    const allTipos = await Tipo.query();
    setTipos(allTipos);
  };
  const [tipo, setTipo] = useState("");
  useEffect(() => {
    fetchTipo();

  }, []);
  return (
    <AS.Container>
      <AS.Campo>{nome}</AS.Campo>
      <AS.ContSelect>
        <SelectFieldTipo data={tipos} value={tipo} onChange={setTipo}></SelectFieldTipo>
      </AS.ContSelect>
      {/* <AS.NewType>
        <AntDesign name="plus" size={24} color={theme.colors.textWhite} />
      </AS.NewType> */}
    </AS.Container>
  );
}
