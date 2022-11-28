import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

interface SelectsProps {
  data: Array<{ id: number; nome: string; laboratorio: string; tipo: string }>;
  value: string;
  onChange: Function;
}

export default function SelectFieldMed({
  data,
  value,
  onChange,
}: SelectsProps | SelectsProps) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => {
        onChange(itemValue);
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
