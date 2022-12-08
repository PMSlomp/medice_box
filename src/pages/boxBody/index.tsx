import React, { useEffect, useState } from "react";
import SelectField from "../../global/components/selectTipo";
import { ButtonAdd } from "./components/buttonAdd";

import * as B from "./styles";
import * as Gc from "../../global/components/styles";
import Tipo from "../../database/models/Tipo";
import Medicamento from "../../database/models/Medicamento";
import SelectFieldTipo from "../../global/components/selectTipo";
import SelectFieldMed from "../../global/components/selectMedicamento";
import { Button } from "react-native";

interface HomeProps {
  navigation: any;
  onSearch: (tipo: string, medicamento: string) => void;
}

export function BoxBody({ navigation, onSearch }: HomeProps) {
  const [tipos, setTipos] = useState<any>([]);
  const [medicamentos, setMedicamentos] = useState<any>([]);

  const [tipo, setTipo] = useState("");
  const [medicamento, setMedicamento] = useState("");

  const fetchTipo = async () => {
    const allTipos = await Tipo.query();
    setTipos(allTipos);
  };
  const fetchMed = async () => {
    const allMedicamentos = await Medicamento.query();
    setMedicamentos(allMedicamentos);
  };

  useEffect(() => {
    fetchTipo();
    fetchMed();
  }, []);

  function handleNavigateToAdd() {
    navigation.navigate("Add");
  }

  return (
    <B.Container>
      <B.Header>
        <B.Logo source={require(`../../../assets/img/logo.png`)} />
        <B.ButtonCont onPress={handleNavigateToAdd}>
          <ButtonAdd />
        </B.ButtonCont>
      </B.Header>
      <B.HeaderInfo></B.HeaderInfo>
      <B.Filters>
        <Gc.SelectContainer>
          <SelectFieldTipo data={tipos} value={tipo} onChange={setTipo} />
        </Gc.SelectContainer>
        {/* <Gc.SelectContainer>
                <SelectField item="ind"/>
            </Gc.SelectContainer> */}
      </B.Filters>
      <B.Search>
        <Button onPress={() => onSearch(tipo, medicamento)} title="Buscar" />
      </B.Search>
      
    </B.Container>
  );
}
