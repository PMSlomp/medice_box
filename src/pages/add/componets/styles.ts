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
        height: 90%;
        aspect-ratio: 1;
        alignItems: center;
        justifyContent: center;
        border-radius: 20px;
        background-color: ${theme.colors.backgroundElement};
    `}
`

//ESTILOS PARA "buttonAdd"
export const ButtonCont = styled.TouchableOpacity`
    ${() => css`
        width: 100%;
    `}
`;

export const AddContainer = styled.View`
    ${({theme}) => css`
        height: 50px;
        width: 70%;
        border-radius: 20px;
        alignItems: center;
        justify-content: center;
        padding: 4px 4px 4px 4px;
        margin-top: 30px;
        margin-left: 15%;
        background-color: ${theme.colors.backgroundElement};
    `}
`;

export const NameButton = styled.Text`
    ${({theme}) => css`
        padding-right: 5px;
        margin-left: 5px;
        color: ${theme.colors.textWhite};
        border-radius: 20px;
        background-color: ${theme.colors.backgroundElement};
    `}
`