import styled, { css } from "styled-components";

const FloatingLabel = styled.div`
    margin-bottom: 24px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
`
const InputWrapper = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 8px;
    padding: 5px 30px;
    label {
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        display: block;
        color: ${({ theme }) => theme.colors.inputLabel};
    }
    input {
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: ${({ theme }) => theme.colors.black};
        width: 100%;
        &:focus-visible {
            outline: none;
        }
    }
`

export {
    FloatingLabel,
    InputWrapper
}