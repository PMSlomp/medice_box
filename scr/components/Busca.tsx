import { Text, View, StyleSheet} from 'react-native'
import React, { ReactNode, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TListMock } from '../mocks/medicines';
import FontText from './FontText';
import CampoSelecao from './CampoSelecao';

interface ListMockProps{mock:TListMock, text:string}

export default function Busca({ mock, text }:ListMockProps) {

    return (
        <View style={style.base}>
            <FontText style={style.tipo}>
                {text}
            </FontText>
            <View style={style.selecao}>
                <CampoSelecao data={mock}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    base:{
        alignItems: 'center',
        flexDirection: "row",
        marginVertical:5,
        justifyContent: 'space-between',
    },
    tipo: {
        fontWeight: 'bold',
        fontSize:15,
        // marginRight:30,
    },
    selecao: {
        alignItems: 'center',
        width:300,
        borderRadius: 40,
        backgroundColor: '#b486e1',
        paddingHorizontal:5,
        // height:30,
    }
})