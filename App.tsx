import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import React from "react";

import theme from "./src/global/styles/theme";
import Routes from "./src/routes";
import { Add } from "./src/pages/add";
import { Box } from "./src/pages/box";
import Tipo from "./src/database/models/Tipo";
import Medicamento from "./src/database/models/Medicamento";

export default function App() {
  // const exampleOperations = async () => {
  //   //Readme: https://github.com/dflourusso/expo-sqlite-orm#readme

  //   const t1 = new Tipo({ label: "Tipo db 1" });
  //   t1.save();

  //   const t2 = new Tipo({ label: "Tipo db 2" });
  //   t2.save();

  //   const t3 = new Tipo({ label: "Tipo db 3" });
  //   t3.save();

  //   // const m1 = new Medicamento({
  //   //   nome: "Nome 1",
  //   //   laboratorio: "Lab 1",
  //   //   tipo: "Tipo 1",
  //   // });
  //   // m1.save();

  //   // const m2 = new Medicamento({
  //   //   nome: "Nome 2",
  //   //   laboratorio: "Lab 2",
  //   //   tipo: "Tipo 2",
  //   // });
  //   // m2.save();
  // };

  const seedDatabase = async () => {
    const tipos = await Tipo.query();
    if (tipos.length == 0) {
      console.log("Seeding database...");

      const t1 = new Tipo({ label: "Analgésico" });
      t1.save();

      const t2 = new Tipo({ label: "Anti-inflamatório" });
      t2.save();

      const t3 = new Tipo({ label: "Anti-térmico" });
      t3.save();

      const t4 = new Tipo({ label: "Antibiótico" });
      t4.save();

      const t5 = new Tipo({ label: "Outro" });
      t5.save();
    }
  };

  React.useEffect(() => {
    // exampleOperations();
    seedDatabase();
    // Tipo.destroyAll();
    // Medicamento.destroyAll(); // TEMPORÁRIO
    // Tipo.createTable();
    // Medicamento.createTable();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <Add/> */}
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
