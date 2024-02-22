import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CONSTANTS } from '../../configs';
import { setItem } from '../../utils/localstorage';

import AppLogo from '../../assets/svgs/logo.svg'

import TextInput from '../../components/common/formInputs/textInput';
import PasswordInput from '../../components/common/formInputs/password';
import { ButtonPrimary } from '../../components/common/button/button';
import { FlexAicJcsb } from '../../styles/common';


const LoginPageWrapper = styled.div`
    text-align: center;
`
const LoginSection = styled.div`
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 14px 80px rgb(34 35 58 / 20%);
    margin: 10vh auto auto;
    padding: 40px;
    transition: all .3s;
    width: 450px;
`
const Logo = styled.img`
    margin-bottom: 20px;
    max-width: 80px;
`
const Heading = styled.h1`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    margin-bottom: 25px;
`
const LoginFormWrapper = styled.div`
    display: block;
    margin-bottom: 30px;
`
const AnchorLink = styled.div`
    font-family: Poppins;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: $btn-primary;
    cursor: pointer;
`

const Login = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const loginUser = () => {
        setItem(CONSTANTS.STORAGE_KEYS.TOKEN, 'dummy_value')
        toast.success('User Logged In Successfully !!!')
        setTimeout(() => navigate('/dashboard'), 1000)
    }

    const handleInputChange = (e: any) => {
        const { value, name} = e?.target
        setForm({
            ...form, 
            [name]: value
        })
    }

    return (
        <LoginPageWrapper>
            <LoginSection>
                <Logo src={AppLogo} alt="app-logo" />
                <Heading>Welcome Back</Heading>
                <LoginFormWrapper>
                    <TextInput 
                        name={`email`} 
                        label={`Email`} 
                        value={form.email}
                        placeholder={`Please enter your email`} 
                        onChange={handleInputChange}
                    />
                    <PasswordInput 
                        name={`password`} 
                        label={`Password`} 
                        value={form.password}
                        placeholder={`Please enter your password`} 
                        onChange={handleInputChange}
                    />
                    <ButtonPrimary onClick={loginUser}>Sign In</ButtonPrimary>
                </LoginFormWrapper>
                <FlexAicJcsb>
                    <AnchorLink>Sign Up</AnchorLink>
                    <AnchorLink>Forgot Password?</AnchorLink>
                </FlexAicJcsb>
            </LoginSection>
        </LoginPageWrapper>
    )
}

export default Login