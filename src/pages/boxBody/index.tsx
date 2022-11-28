import React, { useEffect, useState } from "react";
import SelectField from "../../global/components/selectTipo";
import { ButtonAdd } from "./components/buttonAdd";

import * as B from "./styles";
import * as Gc from "../../global/components/styles";
import Tipo from "../../database/models/Tipo";
import Medicamento from "../../database/models/Medicamento";
import SelectFieldTipo from "../../global/components/selectTipo";
import SelectFieldMed from "../../global/components/selectMedicamento";

interface HomeProps {
  navigation: any;
}

export function BoxBody({ navigation }: HomeProps) {
  const [tipos, setTipos] = useState<any>([]);
  const [medicamentos, setMedicamentos] = useState<any>([]);

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
          <SelectFieldMed data={medicamentos} />
        </Gc.SelectContainer>
        <Gc.SelectContainer>
          <SelectFieldTipo data={tipos} />
        </Gc.SelectContainer>
        {/* <Gc.SelectContainer>
                <SelectField item="ind"/>
            </Gc.SelectContainer> */}
      </B.Filters>
    </B.Container>
  );
}
