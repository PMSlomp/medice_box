import React, { useEffect, useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";
import { BoxBody } from "../boxBody";
import { ListMedicine } from "../boxBody/components/listMedicine";
import Medicamento from "../../database/models/Medicamento";
import { useNavigation } from "@react-navigation/native";

export function Box() {
  const [medicamentos, setMedicamentos] = useState<any>([]);

  const navigation = useNavigation();

  const fetchData = async () => {
    const allMedicamentos = await Medicamento.query();
    setMedicamentos(allMedicamentos);
  };

  useEffect(() => {
    fetchData();

    navigation.addListener("focus", () => {
      fetchData();
    });
  }, []);

  const onDeleteCallback = async () => {
    await fetchData();
  };

  const onSearch = async (tipo?: string) => {
    let where = {};

    if (tipo) {
      where = {
        tipo_eq: tipo,
      };
    }

    const options = {
      columns: "id, nome, laboratorio, tipo",
      where,
      order: "nome ASC",
    };

    const med = await Medicamento.query(options);
    console.log(med);
    setMedicamentos(med);
  };

  const medicine = medicamentos;

  return (
    <View style={style.container}>
      <BoxBody navigation={navigation} onSearch={onSearch} />
      <FlatList
        data={medicine}
        renderItem={(info) => ListMedicine(info.item, onDeleteCallback)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    // marginTop: 2,
    height: "100%",
    backgroundColor: "#eed7f4",
  },
});
