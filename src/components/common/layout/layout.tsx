import React from 'react'
import styled from "styled-components";

import Header from './header'
import SideMenu from './sideMenu'

const MainLayout = styled.div`
    height: 100%;
    width: 100%;
`
const PageBody = styled.div`
    padding-left: 250px;
`
const MainContent = styled.div`
    padding: 20px 25px;
`

const Layout = (props: any) => {
    
    const { children, title } = props

    return (
        <MainLayout>
            <SideMenu />
            <PageBody>
                <Header title={title} />
                <MainContent>
                    {children}
                </MainContent>
            </PageBody>
        </MainLayout>
    )
}

export default Layout