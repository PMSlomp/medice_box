import React from "react";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../../global/styles/theme";
import { ListRenderItemInfo } from "react-native";
import { Medicines, ValueMedicines, MedicineList } from '../../../mocks/selects';

import * as BC from "./styles"

// interface MedicineProps{item: ValueMedicines}

type MedicineProps = {
    id: number; nome: string; laboratorio: string; tipo: string;
}

export function ListMedicine(item: MedicineProps) {

    return <BC.ListContainer>
        <BC.ItemList>
            <BC.ListText>
                {item.nome} ---- {item.laboratorio} ---- {item.tipo}
            </BC.ListText>
            <BC.DeleteType>
                <AntDesign name="delete" size={24} color={theme.colors.textBlack}/>
            </BC.DeleteType>
        </BC.ItemList>
    </BC.ListContainer>
}