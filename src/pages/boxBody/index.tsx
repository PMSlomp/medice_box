import React, { useEffect, useState } from "react";
import SelectField from '../../global/components/select';
import { ButtonAdd } from "./components/buttonAdd";

import * as B from "./styles"
import * as Gc from "../../global/components/styles"
import Tipo from "../../database/models/Tipo";

interface HomeProps {
    navigation: any;
}

export function BoxBody({ navigation }: HomeProps) {
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
            {/* <Gc.SelectContainer>
                <SelectField item="name"/>
            </Gc.SelectContainer> */}
        <Gc.SelectContainer>
          <SelectField data={tipos} />
        </Gc.SelectContainer>
        {/* <Gc.SelectContainer>
                <SelectField item="ind"/>
            </Gc.SelectContainer> */}
        </B.Filters>
    </B.Container>
}