import React from "react";
import SelectField from '../../global/components/select';
import { ButtonAdd } from "./components/buttonAdd";

import * as B from "./styles"
import * as C from "../../global/components/styles"

interface HomeProps {
    navigation: any;
}

export function BoxBody({ navigation }: HomeProps) {

    function handleNavigateToAdd() {
        navigation.navigate('Add');
    }

    return <B.Container>
        <B.Header>
            <B.Logo source={require(`../../../assets/img/logo.png`)}/>
            <B.ButtonCont onPress={handleNavigateToAdd}>
                <ButtonAdd/>
            </B.ButtonCont>
        </B.Header>
        <B.HeaderInfo></B.HeaderInfo>
        <B.Filters>
            <C.SelectContainer>
                <SelectField item="name"/>
            </C.SelectContainer>
            <C.SelectContainer>
                <SelectField item="types"/>
            </C.SelectContainer>
            <C.SelectContainer>
                <SelectField item="ind"/>
            </C.SelectContainer>
        </B.Filters>
    </B.Container>
}