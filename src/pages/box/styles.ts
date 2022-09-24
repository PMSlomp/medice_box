import styled, { css } from "styled-components/native"

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        // margin-top: 20px;
        background-color: ${theme.colors.background};
    `}
`;
export const Header = styled.View`
    ${({theme}) => css`
        height: 10%;
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
        padding: 0 10px 0 10px;
`}`;