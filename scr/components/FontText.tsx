import { StyleSheet, Text} from 'react-native';
import React, { ReactNode } from 'react';

interface FontTextPros{children:ReactNode, style:any}


export default function FontText({ children, style }:FontTextPros) {
    let fontStyle = styles.text;

    if(style?.fontWeight === 'bold') {
        fontStyle = styles.textBold
    }
    if(style?.fontWeight === '900') {
        fontStyle = styles.textExBold
    }

    return (
        <Text style={[style, fontStyle]}>{ children }</Text>
    );
}


const styles = StyleSheet.create({
    text:{
        fontFamily:'Nunito_Reg',
    },
    textBold:{
        fontFamily:'Nunito_Bold',
        fontWeight: 'normal',
    },
    textExBold:{
        fontFamily:'Nunito_Bold_Ex',
        fontWeight: 'normal',
    },
})