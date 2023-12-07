"use client"
import * as React from 'react';
import { useState } from 'react';

import {
    Table, TableBody, TableCell, TableContainer, TableHead
    , TablePagination, TableRow, Grow
} from '@mui/material';

import { Optionbar, Modal } from '@/utils'
import { Delete, Update } from '@/utils/teams/api';

export default function Data_Table(props) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [opendialog, setopendialog] = useState(false)
    const [id, setid] = useState(0)

    const handleClickdelete = (id) => {
        setopendialog(true)
        setid(id)
    };


    function dataperrow(id, data) {
        const value = data[id];

        if (id == "action") {
            return (
                <Optionbar id={data.id} handleDelete={handleClickdelete} table={props.table} />
            )
        } else if (id == "avatar") {
            return <img src={props.image[data.id]} alt={value} className=' w-12 h-12 rounded-full bg-black mx-auto' />
        } else {
            return (
                <p>{value}</p>
            )
        }
    }

    const deleteRecord = async () => {
        const dataform = {
            "id": id
        }
        await Delete(dataform, props.table)
        window.location.reload()
    }

    return (
        <Grow in={true} timeout={600}>
            <div className='bg-white rounded-2xl'>
                <div className="bg-sky-blue">
                    <div className="bg-sky-blue">
                        <div className='Search-tab-group'>
                            <div style={{ width: '150px' }}>
                                {/* <ComboBox ids="searchfield" value={props.Field} method={props.ChangeField()} list={field} /> */}
                            </div>
                            {/* <input type='text' placeholder={`Search for ${props.Field}`} maxLength={60} className='dialog_body_input' onChange={props.OnChange()} disabled={props.Field == 'All'} value={props.Text} /> */}
                            {/* <button onClick={props.Search()} className='Header-button-add' style={{padding: '5px 25px'}}>Search</button> */}
                        </div>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {props.column.map((column) => {
                                        const { id, label, align, minWidth, borderRadius } = column

                                        return (
                                            <TableCell
                                                key={id}
                                                align={align}
                                                style={{
                                                    minWidth: minWidth,
                                                    backgroundColor: "rgb(0, 164, 235, 0.3)",
                                                    borderRadius: borderRadius
                                                }}
                                            >
                                                <div
                                                    className="text-white text-15 quicksand darkblue"
                                                >
                                                    {label}
                                                </div>
                                            </TableCell>
                                        )
                                    }
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {props.row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                        <TableRow role="checkbox" tabIndex={-1} key={index}
                                            sx={{
                                                '& td, & th': { borderBottom: "1.5px solid rgb(233, 236, 239,0.6)" },
                                                "&:hover": {
                                                    backgroundColor: "rgb(0, 164, 235, 0.026)"
                                                }
                                            }}>
                                            {
                                                props.column.map((column) => {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <div
                                                                className='text-15 darkblue quicksand'
                                                            >{

                                                                    dataperrow(column.id, row) // props.function(column.id, row, index)

                                                                }</div>
                                                        </TableCell>
                                                    );
                                                })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={props.row.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
                <Modal open={opendialog} cancel={() => setopendialog(prev => !prev)} method={deleteRecord} id={id} />
            </div>
        </Grow >
    );
}
