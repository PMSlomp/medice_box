import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import React from "react";

import theme from "./src/global/styles/theme";
import Routes from "./src/routes";
import Tipo from "./src/database/models/Tipo";
import Medicamento from "./src/database/models/Medicamento";

export default function App() {
  // Readme: https://github.com/dflourusso/expo-sqlite-orm#readme

  const seedDatabase = async () => {
    console.log("Creating tables...");
    Tipo.createTable();
    Medicamento.createTable();

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
    // Tipo.destroyAll();
    // Medicamento.destroyAll();
    seedDatabase();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
