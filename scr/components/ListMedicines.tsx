import { Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontText from './FontText';
import listMedicines from '../mocks/medicines';
import { TListMedicines } from '../mocks/medicines';

interface ListMedicinesProps{data:TListMedicines}

export default function ListMedicines({ data }:ListMedicinesProps) {
  return (
      <>
      {data.medicines.map(({name, qtd, expire, component}) => {
        return (
          <FontText style={style.general}>{ name } --- { qtd } </FontText>
        )
      })}
      </>
    )
}

const style = StyleSheet.create({
  general: {
    flexDirection: "row",
  }
})