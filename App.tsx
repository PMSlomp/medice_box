import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import React from "react";

import theme from "./src/global/styles/theme";
import Routes from "./src/routes";
import { Add } from "./src/pages/add";
import { Box } from "./src/pages/box";
import Tipo from "./src/database/models/Tipo";

export default function App() {
  const exampleOperations = async () => {
    //Readme: https://github.com/dflourusso/expo-sqlite-orm#readme

    const t1 = new Tipo({ label: "Tipo db 1" });
    t1.save();

    const t2 = new Tipo({ label: "Tipo db 2" });
    t2.save();

    const t3 = new Tipo({ label: "Tipo db 3" });
    t3.save();

    // console.log(t1, t2);
    // const all = await Tipo.query();
    // console.log(all);
  };

  React.useEffect(() => {
    Tipo.dropTable(); // Testing only!! Remove this.
    Tipo.createTable();
    exampleOperations();
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
