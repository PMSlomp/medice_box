import{ SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Add } from './src/pages/add';
import { Box } from './src/pages/box';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
          {/* <Add/> */}
          <Routes/>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
