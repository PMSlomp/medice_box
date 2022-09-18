import { FlatList, ScrollView, Text, ListRenderItem, View, StyleSheet} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import LMedicine from '../../components/LMedicine';
// import mock from '../../mocks/medicines'
import CampoSelecao from '../../components/CampoSelecao';
import { TListMock } from '../../mocks/medicines';
import { TMedicine } from '../../mocks/medicines';
import FontText from '../../components/FontText';
import Busca from '../../components/Busca';

interface ListMockProps{mock:TListMock}

export default function Box({ mock }:ListMockProps) {

    const renderItem = ({item: {name, qtd}}) => <FontText style>{ name } --- { qtd } </FontText>

    return (
    <>
        <FlatList
            data={mock.medicines}
            renderItem={renderItem}
            keyExtractor={({name}) => name} 
            ListHeaderComponent={() => {
                return <>
                    <Header/>
                    <Body>
                        {/* <ListMedicines data={mock}/> */}
                        <Busca mock={mock} text={"Nome: "}/>
                        <Busca mock={mock} text={"Tipo: "}/>
                        <Busca mock={mock} text={"Indicação: "}/>                      
                    </Body>
                </>
            }}
        />
    </>
    )
}
