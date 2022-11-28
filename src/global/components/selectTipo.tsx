import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewMedicineContext } from "../../contexts/NewMedicineContext";

interface SelectsProps {
  data: Array<{ id: number; label: string }>;
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
      {data.map(({ id, label }) => (
        <Picker.Item value={label} label={label} key={id} />
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
