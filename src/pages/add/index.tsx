import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import * as A from "./styles";
import { ButtonCont } from "./componets/styles";
import { AddSelect } from "./componets/addSelect";
import { Input } from "../../global/components/input";
import { ButtonAdd } from "./componets/buttonAdd";
import Tipo from "../../database/models/Tipo";
import {
  NewMedicineContext,
  NewMedicineContextProps,
} from "../../contexts/NewMedicineContext";
import Medicamento from "../../database/models/Medicamento";

interface AddProps {
  route: any;
}

export function Add({ route }: AddProps) {
  const [nome, setNome] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [tipo, setTipo] = useState("");

  const [tipos, setTipos] = useState<any>([]);

  const fetchData = async () => {
    const allTipos = await Tipo.query();
    setTipos(allTipos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ctx: NewMedicineContextProps = {
    tipo,
    setTipo,
  };

  const ConfirmaCadastro = async () => {
    try {
      const m = new Medicamento({ nome, laboratorio, tipo });
      const result = await m.save();
      // console.log("Created: ", result);

      Alert.alert("Confirmação de Cadastro", "Remédio incluído com sucesso!", [
        {
          text: "OK",
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Confirmação de Cadastro", "Erro ao cadastrar remédio!", [
        {
          text: "Tente novamente mais tarde.",
        },
      ]);
    }
  };

  return (
    <NewMedicineContext.Provider value={ctx}>
      <A.Container>
        <A.Header>
          <A.Logo source={require(`../../../assets/img/logo_peq.png`)} />
          <A.Title>Novo medicamento</A.Title>
        </A.Header>
        <A.Body>
          <Input data="Nome" value={nome} onChange={setNome} />
          <Input
            data="Laboratório"
            value={laboratorio}
            onChange={setLaboratorio}
          />
          <AddSelect nome="Tipo" />
          <ButtonCont onPress={ConfirmaCadastro}>
            <ButtonAdd />
          </ButtonCont>
        </A.Body>
      </A.Container>
    </NewMedicineContext.Provider>
  );
}
