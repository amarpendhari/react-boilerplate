import styled, { css } from 'styled-components'

interface BtnProps {
    marginBottom?: string;
}

const Button = styled.button<BtnProps>`
    letter-spacing: 0.4px;
    font-family: "Sofia Pro";
    margin: auto;
    width: 100%;
    max-width: 360px;
    padding: 14px 20px;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all .3s;
    text-decoration: none;
    &:hover {
        transform: translateY(-2px);
    }
`

const ButtonPrimary = styled(Button)<BtnProps>`
    background-color: ${({ theme }) => theme.colors.btnPrimary};
    color: ${({ theme }) => theme.colors.white};
`

const ButtonOutlinePrimary = styled(Button)<BtnProps>`
    border: 1px solid ${({ theme }) => theme.colors.btnPrimary};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.btnPrimary};
`

const ButtonDisabled = styled(Button)<BtnProps>`
    background-color: ${({ theme }) => theme.colors.btnDisabled};
    cursor: none;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.white};
`

export {
    ButtonPrimary, ButtonOutlinePrimary, ButtonDisabled
}