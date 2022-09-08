import { Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// import logo from '../../../../assets/logo.png';
import InfoHeader from './InfoHeader';
import Add from './ButtonAdd';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

export default function Header() {
    return (
      <>
            
        <View style={style.header}>

          <Image source={require('../../../../assets/logo.png')} style={style.logo}/>
          <Add/>

        </View>
        
        <InfoHeader/>

      </>
    );
}

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#eed7f4',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  logo:{
    width: 133.3,
    height: 50,
  }
});