import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import Box from './scr/screens/Box';
import { useFonts, Nunito_400Regular, Nunito_700Bold ,Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import ListMedicines from './scr/components/ListMedicines';
import mock from './scr/mocks/medicines'
import Body from './scr/screens/Box/components/Body';

export default function App() {
  const [font] = useFonts({
    'Nunito_Reg':Nunito_400Regular,
    'Nunito_Bold':Nunito_700Bold,
    'Nunito_Bold_Ex':Nunito_800ExtraBold,
  });

  if(!font){
    return <View/>
  }
  
  return (
    <SafeAreaView>
      
      <StatusBar />
      <Box/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Box: {
    // flex: 1,
    // height: '100%',
    // backgroundColor: '#fff',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
  },
});
