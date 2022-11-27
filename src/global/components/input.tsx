import React from "react";

import * as AS from "./styles"

interface Input{data:String}

export function Input({data}:Input) {
    const [text, onChangeText] = React.useState('');
    
    return <AS.InputContainer>
        <AS.InputCampo>{data}</AS.InputCampo>
        <AS.Input onChangeText={onChangeText} value={text}/>
    </AS.InputContainer>
}