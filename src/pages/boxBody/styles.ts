import styled, { css } from "styled-components/native"

export const Container = styled.View`
    ${({theme}) => css`
        height: 280px;
        margin-top: 20px;
        background-color: ${theme.colors.background};
        margin-bottom: 20px;
    `}
`;
export const Header = styled.View`
    ${({theme}) => css`
        height: 25%;
        flexDirection: row;
        alignItems: center;
        justify-content: space-between;
        padding: 5px 5px 5px 5px;
    `}
`;
export const Logo = styled.Image`
    ${() => css`
        width: 40%;
        aspectRatio: 2.67;
    `}
`;
export const ButtonCont = styled.TouchableOpacity`
    ${() => css`
        height: 50%;
    `}
`;
export const ButtonAdd = styled.View`
    ${({theme}) => css`
        height: 50%;
        width: 50%;
        border-radius: 20px;
        background-color: ${theme.colors.backgroundElement};
    `}
`;

export const HeaderInfo = styled.View`
    ${({theme}) => css`
        height: 20px;
        margin-bottom: 10px;
        background-color: ${theme.colors.backgroundElement};
        flexDirection: row;
        alignItems: center;
        justify-content: space-between;
    `}`;

export const Filters= styled.View`
    ${({theme}) => css`
        padding: 0px 10px 0px 10px;
`}`;

export const Search = styled.View`
    ${({theme}) => css`
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        margin-top: 30px;
        alignItems: center;
    `}
`;