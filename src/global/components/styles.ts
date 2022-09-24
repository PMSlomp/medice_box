import styled, { css } from "styled-components/native"

export const SelectContainer = styled.View`
    ${({theme}) => css`
        margin-top: 10px;
        height: 50px;
        width: 100%;
        flexDirection: row;
        alignItems: center;
        padding: 5px 5px 5px 5px;
        border-radius: 20px;
        background-color: ${theme.colors.backgroudAddSelect};
    `}
`;

export const InputContainer = styled.View`
    ${({theme}) => css`
        margin-top: 5px;
        height: 50px;
        width: 100%;
        flexDirection: row;
        alignItems: center;
        padding: 5px 5px 5px 5px;
    `}
`;
export const InputCampo = styled.Text`
    ${({theme}) => css`
        color: #000;
        width: 25%;
    `}
`;
export const InputContSelect = styled.View`
    ${({theme}) => css`
    width: 75%;
    height: 90%;
    alignItems: center;
    justifyContent: center;
    border-radius: 20px;
    padding: 3px 3px 3px 3px;
    background-color: ${theme.colors.backgroudAddSelect};
    `}
`
export const Input = styled.TextInput`
    ${({theme}) => css`
    height: 100%;
    width: 75%;
    border-radius: 20px;
    border-color: ${theme.colors.backgroudAddSelect};
    border-width: 3px;
    border-style: solid;
    padding-left: 8px;
    background-color: ${theme.colors.textWhite};
    `}
`
