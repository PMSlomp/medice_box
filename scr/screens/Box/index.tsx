import { Text } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import ListMedicines from '../../components/ListMedicines';
import mock from '../../mocks/medicines'

export default function Box() {
    return (
    <>
        <Header/>
        <Body>
            <Text>Tela inicial</Text>
            <ListMedicines data={mock}/>
            <Text>Tela inicial</Text>
        </Body>
    </>)
}
