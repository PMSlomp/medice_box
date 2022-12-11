import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewMedicineContext } from "../../contexts/NewMedicineContext";

interface SelectsProps {
  data: Array<{ name: string; url: string }>;
  value: string;
  onChange: Function;
}

export default function SelectFieldTipo({
  data,
  value,
  onChange,
}: SelectsProps) {
  const ctx = useContext(NewMedicineContext);

  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => {
        onChange(itemValue);
        ctx.setTipo(itemValue);
      }}
      style={style.option}
    >
      {data.map(({ name, url }) => (
        <Picker.Item value={name} label={name} key={url} />
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
