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
        padding: 5px 5px 5px 5px;
        background-color: ${theme.colors.backgroundElement};
    `}
`;
export const Logo = styled.Image`
    ${() => css`
        width: 13%;
        // height: 50%;
        aspectRatio: 1.0;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        margin-left: 30px;
        fontWeight: bold;
        font-size: 20px;
        color: ${theme.colors.textWhite};
    `}
`;
export const Body = styled.View`
    ${({theme}) => css`
        flex: 1;
        height: 90%;
        alignItems: stretch;
        padding: 10px 10px 0px 10px;
    `}
`;
