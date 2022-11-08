import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import * as A from "./styles"
import { ButtonCont } from "./componets/styles"
import { AddSelect } from './componets/addSelect';
import { Input } from "../../global/components/input";
import { ButtonAdd } from './componets/buttonAdd';
import Tipo from "../../database/models/Tipo";

interface AddProps {
    route: any;
}

export function Add({ route }: AddProps) {

    const [tipos, setTipos] = useState<any>([]);

    const fetchData = async () => {
        const allTipos = await Tipo.query();
        // const allNames = await Tipo.query();
        // const allInd = await Tipo.query();
        setTipos(allTipos);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
            {/* <AddSelect nome='Indicação' value='indicate'/> */}
            <AddSelect nome='Tipo' value={tipos}/>
            {/* <AddSelect nome='Tipo' value='types'/> */}
            <ButtonCont onPress={ConfirmaCadastro}>
                <ButtonAdd/>
            </ButtonCont>
        </A.Body>
        
    </A.Container>
}