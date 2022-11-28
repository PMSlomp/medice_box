import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as AS from "./styles";
import SelectField from "../../../global/components/selectTipo";
import theme from "../../../global/styles/theme";

interface Input {
  nome: String;
  value: Array<{ id: number; label: string }>;
}

export function AddSelect({ nome, value }: Input) {
  return (
    <AS.Container>
      <AS.Campo>{nome}</AS.Campo>
      <AS.ContSelect>
        <SelectField data={value}></SelectField>
      </AS.ContSelect>
      <AS.NewType>
        <AntDesign name="plus" size={24} color={theme.colors.textWhite} />
      </AS.NewType>
    </AS.Container>
  );
}
