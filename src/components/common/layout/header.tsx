import React from 'react'
import styled from 'styled-components'

import { CONSTANTS } from '../../../configs'
import { removeItem } from '../../../utils/localstorage'

import LogoutSvg from '../../../assets/svgs/logout.svg'

const HeaderWrapepr = styled.div`
    padding: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.white};
`
const LogoutBtn = styled.a`
    color: ${({ theme }) => theme.colors.red};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    img {
        margin-right: 5px;
        max-width: 15px;
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.sidemenuHoverBG};
    }
`

const Header = (props: any) => {

    const { title } = props

    const logoutUser = () => {
        removeItem(CONSTANTS.STORAGE_KEYS.TOKEN)
        setTimeout(() => {
            window.location.reload()
        },2000)
    }

    return (
        <HeaderWrapepr>
            <h1>{title || 'Page Title'}</h1>
            <div>
                <LogoutBtn onClick={logoutUser}>
                    <img src={LogoutSvg} alt={`logout`} />
                    Logout
                </LogoutBtn>
            </div>
        </HeaderWrapepr>
    )
}

export default Header