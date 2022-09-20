import React from "react";
import { StyleSheet } from "react-native";
import { TMedicine } from "../mocks/medicines";
import FontText from "./FontText";

interface ListMedicinesProps {
  item: TMedicine;
}

export default function LMedicine({ item }: ListMedicinesProps) {
  return (
    <>
      <FontText style={style.general}>
        {item.name} --- {item.qtd} --- {item.expire}
      </FontText>
    </>
  );
}

const style = StyleSheet.create({
  general: {
    flexDirection: "row",
  },
});
