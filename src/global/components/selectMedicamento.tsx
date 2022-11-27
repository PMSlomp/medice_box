import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

interface SelectsProps {
  data: Array<{ id: number; nome: string; laboratorio: string; tipo: string }>;
}

export default function SelectFieldMed({ data }: SelectsProps|SelectsProps) {
  const [pkVal, setPkVal] = useState("DEF");

  return (
    <Picker
      selectedValue={pkVal}
      onValueChange={(itemValue, itemIndex) => {
        setPkVal(itemValue);
      }}
      style={style.option}
    >
      {data.map(({ id, nome }) => (
        <Picker.Item value={id} label={nome} key={id} />
      ))}
    </Picker>
  );
}

const style = StyleSheet.create({
  option: {
    borderRadius: 40,
    width: "100%",
    color: "#fff",
  },
});