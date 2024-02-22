import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useLocation, Link } from 'react-router-dom';

import SiteLogo from '../../../assets/svgs/logo.svg'

import AssetsSvg from '../../../assets/svgs/assets.svg'
import UserSvg from '../../../assets/svgs/user.svg'
import TransactionHistorySvg from '../../../assets/svgs/transaction-history.svg'

const SidemenuWrapper = styled.div`
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 10px 0 28px -20px rgb(0 0 0 / 75%);
    height: 100%;
    left: 0;
    min-height: 100vh;
    position: fixed;
    top: 0;
    width: 250px;
`
const SidemenuLogo = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-height: 120px;
    padding: 25px;
    img {
        max-width: 120px;
        width: 100%;
    }
`
const SidemenuNavigationWrapper = styled.div`
    height: calc(100vh - 120px);
    overflow-y: auto;
    padding: 20px 0;
    ul {
        padding: 0 15px;
        li {
            list-style: none;
            &.active {
                a {
                    font-weight: 600;
                    color: ${({ theme }) => theme.colors.sidemenuActive};
                }
            }
            a {
                display: flex;
                align-items: center;
                padding: 10px 15px;
                margin: 5px 0;
                border-radius: 8px;
                color: black;
                text-decoration: none;
                img {
                    margin-right: 10px;
                }
                &:hover {
                    background: ${({ theme }) => theme.colors.sidemenuHoverBG};
                }
            }
        }
    }
`

const SideMenuAnchor = (props: any) => {

    const { title, href, icon, activeUrl } = props
    return (
        <li className={`${activeUrl === href ? 'active' : ''}`}>
            <Link to={href}>
                <img src={icon} alt={title} />
                <span>{title}</span>
            </Link>
        </li>
    )
}

const SideMenu = () => {

    const location = useLocation()

    const [activeUrl, setActiveUrl] = useState<string>('')

    const SideMenuArr = [
        {
            title: 'Assets',
            icon: AssetsSvg,
            link: '/assets'
        },
        {
            title: 'Users',
            icon: UserSvg,
            link: '/users'
        },
        {
            title: 'Transaction History',
            icon: TransactionHistorySvg,
            link: '/transactions'
        }
    ]

    useEffect(() => {
        if(location?.pathname) setActiveUrl(location?.pathname)
    },[location])

    return (
        <SidemenuWrapper>
            <SidemenuLogo>
                <Link to={`/dashboard`}>
                    <img src={SiteLogo} alt={`site-logo`} />
                </Link>
            </SidemenuLogo>
            <SidemenuNavigationWrapper>
                <ul>
                    {SideMenuArr.map((menuItem, i) => {
                        return (
                            <SideMenuAnchor
                                key={i}
                                activeUrl={activeUrl}
                                title={menuItem?.title}
                                icon={menuItem?.icon}
                                href={menuItem?.link ? menuItem?.link : 'javascript:void(0)'}
                            />
                        )
                    })}
                </ul>
            </SidemenuNavigationWrapper>
        </SidemenuWrapper>
    )
}

export default SideMenu