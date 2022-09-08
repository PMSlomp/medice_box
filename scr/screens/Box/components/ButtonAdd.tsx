import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontText from '../../../components/FontText';

export default function InfoHeader() {
    return (<>

        <View style={style.add}>

          <View style={style.plus}>
            <Text style={style.textPlus}>+</Text>
          </View>
          
          <View>
            <FontText style={style.text}> Adiconar novo remédio</FontText>
          </View>
          
        </View>

      </>
    );
}

const style = StyleSheet.create({
    add: {
      alignItems: 'center',
      flexDirection: "row",
      paddingHorizontal: 10,
      width: 230,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#680382'
    },
    plus: {
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: '#eed7f4',
      alignItems: 'center',
      marginLeft: -3,
    },
    textPlus: {
      fontSize: 20,
      color: '#680382',
      fontWeight: '900',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      color: '#eed7f4',
    }

})