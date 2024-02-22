import React from 'react'

import Layout from '../components/common/layout/layout'
import TableComponent from '../components/common/table/table'

import { UserData } from '../mock/data'

const UsersPage = () => {

    const TableHead = () => {
        return (
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>KYC Status</th>
        </tr>
        )
    }

    const TableBody = () => {
        return (
            <>
                {UserData?.length 
                    ? UserData?.map(user => {
                        return (
                            <tr key={user?.id}>
                                <td>{user?.first_name}</td>
                                <td>{user?.last_name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone_number}</td>
                                <td>{user?.kycStatus}</td>
                            </tr>
                        )
                    })
                    : null}
            </>
        )
    }

    return (
        <Layout title={`Users`}>
            <h2 className='page-heading'>Welcome to the UsersPage Listing !!!</h2>
            <TableComponent tableHead={<TableHead />} tableBody={<TableBody />} />
        </Layout>
    )
}

export default UsersPage