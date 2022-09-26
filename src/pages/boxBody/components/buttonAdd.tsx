import React from "react";

import * as BA from "./styles"

export function ButtonAdd() {
    return <BA.Container>
        <BA.SimbolBox>
            <BA.Simbol>+</BA.Simbol>
        </BA.SimbolBox>
        <BA.NameButton>Cadastrar Novo Remédio</BA.NameButton>
    </BA.Container>
}