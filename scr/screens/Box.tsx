import { Image, StyleSheet, Dimensions, Text} from 'react-native';
import React from 'react';

import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Box() {
    return (<>
    <Image source={logo} style={style.logo}/>
    <Text>Caixa Padrão</Text>
    <Text>Criar nova Caixa</Text>
    </>)
}

const style = StyleSheet.create({
    logo:{
        // flex: 1,
        // display: "flex",
        // flexDirection: "vertical",
        // justifySelf: 'center',
        resizeMode: "center",
        // alignSelf: 'flex-start',
        // alignSelf: "center",
        width: width / 4,
        height: 130 / 349 * width / 4,
        marginTop: 10,
        marginLeft: 10, 
    }
});