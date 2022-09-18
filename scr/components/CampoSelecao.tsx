import { Text, View, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TListMock } from '../mocks/medicines';
import FontText from './FontText';

interface ListTypesMedsProps{data:TListMock}

export default function CampoSelecao({ data }:ListTypesMedsProps) {
    const [pkVal, setPkVal] = useState("Tipo 1");

    return (
      <>
        <Picker 
            selectedValue={pkVal} 
            onValueChange={(itemValue, itemIndex) =>{
                setPkVal(itemValue);
            }}
            style={style.option}>
            {/* <FontText style={style.general}> */}
            {data.typesMeds.map(({value, label}) => (
                // <View style={style.option}>
                    <Picker.Item value={value} label={label} key={value} />
                // </View>
            ))}
            {/* </FontText> */}
        </Picker>
      </>
    )
}

const style = StyleSheet.create({
    option: {
        borderRadius: 20,
        // backgroundColor: '#680382',
        // width:400,
        width:'100%',
    }
})