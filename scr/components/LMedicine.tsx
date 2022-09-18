import { FlatList, Image, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontText from './FontText';
// import listMedicines from '../mocks/medicines';
import { TMedicine } from '../mocks/medicines';

interface ListMedicinesProps{item:ListRenderItem<TMedicine>}
// interface ListMedicinesProps{name:string, qtd:number, expire:string, component:string}
// export default function LMedicine({ name, qtd, expire, component}:ListMedicinesProps) 
export default function LMedicine({ item}:ListMedicinesProps) {

  // const renderItem = ({item: {name, qtd}}) => <FontText style={style.general}>{ name } --- { qtd } </FontText>
  
  return (
      <>
        <FontText style={style.general}>{ name } --- { qtd } </FontText>
      </>
    )
}

const style = StyleSheet.create({
  general: {
    flexDirection: "row",
  }
})