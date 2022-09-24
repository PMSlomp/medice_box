import styled, { css } from "styled-components/native"

export const Container = styled.View`
    ${({theme}) => css`
        height: 100%;
        width: 100%;
        border-radius: 20px;
        flexDirection: row;
        alignItems: center;
        padding: 4px 4px 4px 4px;
        background-color: ${theme.colors.backgroundElement};
    `}
`;

export const SimbolBox = styled.View`
    ${({theme}) => css`
        height: 100%;
        aspectRatio: 1;
        borderRadius: 20px;
        alignItems: center;
        justifyContent: center;
        background-color: ${theme.colors.background};
    `}
`

export const Simbol = styled.Text`
    ${({theme}) => css`
        fontWeight: bold;
        fontSize: 15px;
        // margin-top: -2px;
        color: ${theme.colors.backgroundElement};
    `}
`

export const NameButton = styled.Text`
    ${({theme}) => css`
        padding-right: 5px;
        margin-left: 5px;
        color: ${theme.colors.textWhite};
        border-radius: 20px;
        background-color: ${theme.colors.backgroundElement};
    `}
`