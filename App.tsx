import{ SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { createConnection } from "typeorm";

import theme from './src/global/styles/theme';
import Routes from './src/routes';
import config from "./src/database/config";
import { Add } from './src/pages/add';
import { Box } from './src/pages/box';



export default function App() {
  // const connect = React.useCallback(async () => {
  //   try {
  //     const connection = await createConnection(config);
  //     // const tipo = await connection.getRepository("Tipo").find();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // React.useEffect(() => {
  //   connect(); // this must be done once in the App's entry point (I suggest here in App.js)
  // }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
          {/* <Add/> */}
          <Routes/>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
