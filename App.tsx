import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import Box from './scr/screens/Box';
import { useFonts, Nunito_400Regular, Nunito_700Bold ,Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Medicine from './scr/screens/AddMedicine/index';

const Stack = createNativeStackNavigator();

export enum ScreenNames {
  Box = "Box",
  Medicine = "Medicine",
}

ScreenNames.Box;

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

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Box} component={Box}/>
        <Stack.Screen name={ScreenNames.Medicine} component={Medicine}/>
      </Stack.Navigator>
      </NavigationContainer>

      {/* <Box mock={mock}/> */}
      
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
