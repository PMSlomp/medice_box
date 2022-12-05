import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../../global/styles/theme";

import * as BC from "./styles"
import Medicamento from "../../../database/models/Medicamento";

// interface MedicineProps{item: ValueMedicines}

type MedicineProps = {
    id: number; nome: string; laboratorio: string; tipo: string;
}

export function ListMedicine(item: MedicineProps) {

    const id = useState(item.id);

    const DeletaMedicamento = async () => {
        try {
            const med = await Medicamento.find(id)
            med.destroy()
    
          Alert.alert("Confirmação", "Remédio deletado com sucesso!", [
            {
              text: "OK",
            },
          ]);
        } catch (error) {
          console.error(error);
          Alert.alert("Confirmação", "Erro ao deletar remédio!", [
            {
              text: "Tente novamente mais tarde.",
            },
          ]);
        }
      };

    return <BC.ListContainer>
        <BC.ItemList>
            <BC.ListText>
                {item.nome} ---- {item.laboratorio} ---- {item.tipo}
            </BC.ListText>
            <BC.DeleteType onPress={DeletaMedicamento}>
                <AntDesign name="delete" size={24} color={theme.colors.textBlack}/>
            </BC.DeleteType>
        </BC.ItemList>
    </BC.ListContainer>
}