import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios'

import * as AS from "./styles";
import SelectFieldTipo from '../../../global/components/selectTipo';

interface Input {
  nome: String;
}

export function AddSelect({ nome }: Input) {
  const [tipos, setTipos] = useState<any>([]);
  
  React.useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/growth-rate/')
    .then((response) => {
      setTipos(response.data['results']);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  }, [])

  const [tipo, setTipo] = useState("");
  
  return (
    <AS.Container>
      <AS.Campo>{nome}</AS.Campo>
      <AS.ContSelect>
        <SelectFieldTipo data={tipos} value={tipo} onChange={setTipo}></SelectFieldTipo>
      </AS.ContSelect>
    </AS.Container>
  );
}
