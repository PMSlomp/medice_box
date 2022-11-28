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
    // console.log(allMedicamentos);
    setMedicamentos(allMedicamentos);
  };

  useEffect(() => {
    fetchData();

    navigation.addListener("focus", () => {
      fetchData();
    });
  }, []);

  const onSearch = (tipo: string, medicamento: string) => {
    console.log("Search!!", tipo, medicamento);
  };

  const medicine = medicamentos;

  return (
    <View style={style.container}>
      <BoxBody navigation={navigation} onSearch={onSearch} />
      <FlatList
        data={medicine}
        renderItem={(info) => ListMedicine(info.item)}
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
