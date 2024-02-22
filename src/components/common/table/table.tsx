import React from 'react';
import styled from "styled-components";

const ListingTable = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    table {
        width: 100%;
    }
    tr {
        &:nth-child(even){background-color: white;}
        &:nth-child(odd){background-color: white;}
        &:hover {background-color: #ddd;}
    }
    td, th {
        padding: 10px 15px;
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #F5F5FC;
        color: black;  
    }
`

const TableComponent = (props: any) => {

    const { tableHead, tableBody} = props

    return (
        <ListingTable>
            <table>
                <thead>
                    {tableHead}
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </ListingTable>
    )
}

export default TableComponent