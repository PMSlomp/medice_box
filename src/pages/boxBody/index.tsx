import React, { useEffect, useState } from "react";
import { ButtonAdd } from "./components/buttonAdd";
import axios from 'axios'
import { Button } from "react-native";
import { StyleSheet, Pressable, Text } from "react-native";

import * as B from "./styles";
import * as Gc from "../../global/components/styles";
import Medicamento from "../../database/models/Medicamento";
import SelectFieldTipo from "../../global/components/selectTipo";

interface HomeProps {
  navigation: any;
  onSearch: (tipo?: string) => void;
}

export function BoxBody({ navigation, onSearch }: HomeProps) {
  const [tipos, setTipos] = useState<any>([]);
  const [medicamentos, setMedicamentos] = useState<any>([]);

  const [tipo, setTipo] = useState("");
  const [medicamento, setMedicamento] = useState("");

  React.useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/growth-rate/')
    .then((response) => {
      setTipos(response.data['results']);
      console.log(tipos)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  const fetchMed = async () => {
    const allMedicamentos = await Medicamento.query();
    setMedicamentos(allMedicamentos);
  };

  useEffect(() => {
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
      </B.Filters>
      <B.Search>
        <Pressable style={styles.button_search} onPress={() => onSearch(tipo)}>
          <Text style={styles.text}> Buscar</Text>
        </Pressable>
        <Pressable style={styles.button_clear} onPress={() => onSearch(undefined)}>
          <Text style={styles.text}> Limpar</Text>
        </Pressable>
        {/* <Button onPress={() => onSearch(tipo)} title="Buscar" styled={style.option}  /> */}
        {/* <Button onPress={() => onSearch(undefined)} title="Limpar" /> */}
      </B.Search>
    </B.Container>
  );
}

const styles = StyleSheet.create({
  button_search: {
    width: "70%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    marginBottom: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#48015b',
  },
  button_clear: {
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    marginTop: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});