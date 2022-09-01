import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Box from './scr/screens/Box';

export default function App() {
  return (
    <SafeAreaView>
      <Box/>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
