import React from "react";
import { Alert } from "react-native";

import * as A from "./styles"
import { ButtonCont } from "./componets/styles"
import { AddSelect } from './componets/addSelect';
import { Input } from "../../global/components/input";
import { ButtonAdd } from './componets/buttonAdd';

interface AddProps {
    route: any;
}

export function Add({ route }: AddProps) {

    const ConfirmaCadastro = () => {
        Alert.alert(
            "Confirmação de Cadastro",
            "Remédio incluído com sucesso!",
            [
                {
                    text: "OK",
                }
            ]
        )
    }

    return <A.Container>
        <A.Header>
            <A.Logo source={require(`../../../assets/img/logo_peq.png`)}/>
            <A.Title>Novo medicamento</A.Title>
        </A.Header>
        <A.Body>
            <Input data='Nome' />
            <Input data='Laboratório'/>
            <AddSelect data='Indicação' value='indicate'/>
            {/* <AddSelect data='Tipo' value='types'/> */}
            <AddSelect data='Tipo' value='types'/>
            <ButtonCont onPress={ConfirmaCadastro}>
                <ButtonAdd/>
            </ButtonCont>
        </A.Body>
        
    </A.Container>
}