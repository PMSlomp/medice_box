import React, { useEffect, useState } from "react";

import { FlatList, StyleSheet } from "react-native";
import { BoxBody } from "../boxBody";
import { ListMedicine } from "../boxBody/components/listMedicine";
import Medicamento from "../../database/models/Medicamento";

interface HomeProps {
  navigation: any;
}

export function Box({ navigation }: HomeProps) {
  const [medicamentos, setMedicamentos] = useState<any>([]);

  const fetchData = async () => {
    const allMedicamentos = await Medicamento.query();

    console.log(allMedicamentos);

    setMedicamentos(allMedicamentos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const medicine = medicamentos;

  return (
    <FlatList
      data={medicine}
      renderItem={(info) => ListMedicine(info.item)}
      contentContainerStyle={style.list}
      ListHeaderComponent={<BoxBody navigation={navigation} />}
    />
  );
}

const style = StyleSheet.create({
  list: {
    marginTop: 2,
    height: "100%",
    backgroundColor: "#eed7f4",
  },
});
