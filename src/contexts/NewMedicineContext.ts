import { createContext } from "react";

export interface NewMedicineContextProps {
  tipo: string;
  setTipo: Function;
}

export const NewMedicineContext = createContext<NewMedicineContextProps>({
  tipo: "",
  setTipo: () => {},
});
