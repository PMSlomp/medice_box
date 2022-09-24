import React from "react";

import * as AS from "./styles"
import SelectField from '../../../global/components/select';

interface Input{data:String, value:string}

export function AddSelect({data, value}:Input) {
    return <AS.Container >
        <AS.Campo>{data}</AS.Campo>
        <AS.ContSelect>
            <SelectField item={value}></SelectField>
        </AS.ContSelect>
        <AS.NewType>
            <AS.TextType>+</AS.TextType>
        </AS.NewType>
    </AS.Container>
}