import React from "react";
import { ListRenderItemInfo } from "react-native";
import { Medicines, ValueMedicines, MedicineList } from '../../../mocks/selects';

import * as BC from "./styles"

interface MedicineProps{item: ValueMedicines}


export function ListMedicine(item: ValueMedicines) {

    return <BC.ListContainer>
        <BC.ListText>{item.label} ----</BC.ListText>
    </BC.ListContainer>
}