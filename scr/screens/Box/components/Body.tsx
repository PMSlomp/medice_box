import { Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, { ReactNode } from 'react';

const height = Dimensions.get('window').height;
interface BodyPros{children:ReactNode}

export default function Body({ children }:BodyPros) {
    return (
       
        <View style={style.body}>{ children }</View>  

    );
}

const style = StyleSheet.create({
  body: {
    justifyContent: 'space-between',
    backgroundColor: '#eed7f4',
    paddingHorizontal: 10,
    paddingTop: 7,
  },
});