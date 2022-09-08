import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function InfoHeader() {
    return (
    <>

      <View style={style.infos}>
          <Text style={style.text}> Remédios cadastrados: 10</Text>
          <Text style={style.text}> Remédios a vencer: 4</Text>
      </View>

    </>
    );
}

const style = StyleSheet.create({
  infos: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: '#48015b',
  },
  text: {
    color: '#eed7f4',
  }
})