import{ SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import theme from './src/global/styles/theme';
import Routes from './src/routes';
import { Add } from './src/pages/add';
import { Box } from './src/pages/box';
import Tipo from "./src/database/models/Tipo";
import Medicamento from './src/database/models/Medicamento';



export default function App() {
  const exampleOperations = async () => {
    //Readme: https://github.com/dflourusso/expo-sqlite-orm#readme

    const t1 = new Tipo({ label: "Tipo db 1" });
    t1.save();

    const t2 = new Tipo({ label: "Tipo db 2" });
    t2.save();

    const t3 = new Tipo({ label: "Tipo db 3" });
    t3.save();

    const m1 = new Medicamento({ nome: "Nome 1", laboratorio: "Lab 1", tipo: 'Tipo 1' });
    m1.save();

    const m2 = new Medicamento({ nome: "Nome 2", laboratorio: "Lab 2", tipo: 'Tipo 2' });
    m2.save();
  };

  React.useEffect(() => {
    Tipo.destroyAll();
    Tipo.createTable();
    Medicamento.destroyAll(); // TEMPORÁRIO
    Medicamento.createTable();
    exampleOperations();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
          {/* <Add/> */}
          <Routes/>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
