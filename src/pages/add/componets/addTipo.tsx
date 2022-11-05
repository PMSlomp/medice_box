import React from "react";
import { AntDesign } from '@expo/vector-icons';

import * as AS from "./styles"
import SelectField from '../../../global/components/select';
import theme from "../../../global/styles/theme";

interface Input{data:String, value:string}

export function AddSelect({data, value}:Input) {
    return <AS.Container >
        <AS.Campo>{data}</AS.Campo>
        <AS.ContSelect>
            <SelectField item={value}></SelectField>
        </AS.ContSelect>
        <AS.NewType>
            <AntDesign name="plus" size={24} color={theme.colors.textWhite} />
        </AS.NewType>
    </AS.Container>
}