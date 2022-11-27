import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

interface SelectsProps {
  data: Array<{ id: number; label: string }>;
}

export default function SelectFieldTipo({ data }: SelectsProps) {
  const [pkVal, setPkVal] = useState("DEF");

  return (
    <Picker
      selectedValue={pkVal}
      onValueChange={(itemValue, itemIndex) => {
        setPkVal(itemValue);
      }}
      style={style.option}
    >
      {data.map(({ id, label }) => (
        <Picker.Item value={id} label={label} key={id} />
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