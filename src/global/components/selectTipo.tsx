import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewMedicineContext } from "../../contexts/NewMedicineContext";

interface SelectsProps {
  data: Array<{ id: number; label: string }>;
}

export default function SelectFieldTipo({ data }: SelectsProps) {
  const ctx = useContext(NewMedicineContext);

  const [pkVal, setPkVal] = useState("DEF");

  return (
    <Picker
      selectedValue={pkVal}
      onValueChange={(itemValue, itemIndex) => {
        setPkVal(itemValue);
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
