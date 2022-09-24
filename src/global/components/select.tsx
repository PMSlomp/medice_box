import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from 'react-native';
import React, { useState } from "react";
import { Selects } from '../../mocks/selects';

interface SelectsProps{item:string}

export default function SelectField({ item }:SelectsProps) {
    const [pkVal, setPkVal] = useState(item);
    
    if(item=='types'){
        return <Picker 
            selectedValue={pkVal} 
            onValueChange={(itemValue, itemIndex) =>{
                setPkVal(itemValue);
            }}
            style={style.option}>
            {Selects.types.map(({value, label}) => (
                <Picker.Item value={value} label={label} key={value} />
            ))}
        </Picker>
    }
    if(item=='name'){
        return <Picker 
            selectedValue={pkVal} 
            onValueChange={(itemValue, itemIndex) =>{
                setPkVal(itemValue);
            }}
            style={style.option}>
            {Selects.name.map(({value, label}) => (
                <Picker.Item value={value} label={label} key={value} />
            ))}
        </Picker>
    }
    return <Picker 
        selectedValue={pkVal} 
        onValueChange={(itemValue, itemIndex) =>{
            setPkVal(itemValue);
        }}
        style={style.option}>
        {Selects.indicated.map(({value, label}) => (
            <Picker.Item value={value} label={label} key={value} />
        ))}
    </Picker>

}

const style = StyleSheet.create({
    option: {
        borderRadius: 40,
        width:'100%',
        color: '#fff'
    }
})