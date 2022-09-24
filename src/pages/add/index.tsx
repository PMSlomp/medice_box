import React from "react";

import * as A from "./styles"
import { AddSelect } from './componets/addSelect';
import { Input } from "../../global/components/input";

interface AddProps {
    route: any;
}

export function Add({ route }: AddProps) {

    return <A.Container>
        <A.Header>
            <A.Logo source={require(`../../../assets/img/logo_peq.png`)}/>
            <A.Title>Novo medicamento</A.Title>
        </A.Header>
        <A.Body>
            <Input data='Nome' />
            <Input data='Laboratório'/>
            <AddSelect data='Indicação' value='indicate'/>
            <AddSelect data='Tipo' value='types'/>
        </A.Body>
    </A.Container>
}