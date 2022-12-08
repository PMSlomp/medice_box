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

  const onSearch = async (tipo?: string) => {
    // where para todos
    let where = {};

    // se o tipo existir, filtrar
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

    const med = await Medicamento.query(options); //Busca apenas 1
    // const med = await Medicamento.findBy({tipo_eq: "Outro"}); //Busca apenas 1
    console.log(med);
    setMedicamentos(med);
    // }
    // else {
    //     const med = await Medicamento.query()
    // }
    // setMedicamentos(med);
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
