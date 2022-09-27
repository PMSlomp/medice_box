import styled, { css } from "styled-components/native"

//ESTILOS PARA 'addSelect'
export const Container = styled.View`
    ${({theme}) => css`
        margin-top: 5px;
        height: 50px;
        width: 100%;
        flexDirection: row;
        alignItems: center;
        padding: 5px 5px 5px 5px;
    `}
`;
export const Campo = styled.Text`
    ${({theme}) => css`
        color: #000;
        width: 25%;
    `}
`;
export const ContSelect = styled.View`
    ${({theme}) => css`
        width: 60%;
        height: 90%;
        alignItems: center;
        justifyContent: center;
        border-radius: 20px;
        padding-left: 10px;
        background-color: ${theme.colors.backgroudAddSelect};
    `}
`
export const NewType = styled.View`
    ${({theme}) => css`
        margin-left: 10px;
        width: 10%;
        height: 90%;
        alignItems: center;
        justifyContent: center;
        border-radius: 20px;
        background-color: ${theme.colors.backgroundElement};
    `}
`
export const TextType = styled.Text`
    ${({theme}) => css`
        color:${theme.colors.textWhite};
        fontWeight: bold;
        font-size: 20px;
    `}
`

