import React from "react";


import { FlatList, StyleSheet } from "react-native";
import { BoxBody } from "../boxBody";
import { Medicines } from '../../mocks/selects';
import { ListMedicine } from "../boxBody/components/listMedicine";
import styled from 'styled-components/native';


interface HomeProps {
    navigation: any;
}

export function Box({ navigation }: HomeProps) {

    // isso vira um useEffect no futuro (para buscar do banco ou algo do tipo)
    const medicine = Medicines

    return  (
        <FlatList data={medicine}
            renderItem={info => ListMedicine(info.item)}
            contentContainerStyle={style.list}
            ListHeaderComponent={
                <BoxBody navigation={navigation}/>
            }
        />

    )
}

const style = StyleSheet.create({
    list: {
        marginTop: 2,
        height: "100%",
        backgroundColor: '#eed7f4',
    }
})