"use client"
import { useState } from "react";

import * as material from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';

const menuitem_sx = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    fontSize: '14px',
    padding: '6px 20px',
    borderRadius: '5px',
    fontFamily: "Inter",
    fontWeight: '500',
    letterSpacing: '0.5px',

    '&:hover': {
        backgroundColor: '#f6f6f7'
    }
}

export default function Optionbar({ id, handleDelete, table }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openaction = Boolean(anchorEl);

    const handleClickAction = (id) => (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAction = () => {
        setAnchorEl(null);
    };

    const handleClickdelete = () => {
        handleDelete(id)
        setAnchorEl(null);
    };

    return (
        <>
            <material.IconButton onClick={handleClickAction()}>
                <MoreVertRoundedIcon sx={{ fontSize: "19px" }} />
            </material.IconButton>
            <Menu
                elevation={0}
                anchorEl={anchorEl}
                open={openaction}
                onClose={handleCloseAction}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'center', horizontal: 'left' }}
                PaperProps={{
                    style: {
                        padding: '0px 5px',
                        borderRadius: "10px",
                        border: '1px solid #e9ecef',
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                    }
                }}
            >
                <a href={`${table}/view/${id}`} style={{ textDecoration: "none" }}>
                    <span style={{ color: '#252a35' }}>
                        <MenuItem sx={menuitem_sx} onClick={handleCloseAction}>
                            <VisibilityIcon sx={{ fontSize: "19px" }} />
                            <p className="text-gray-800 quicksand">View</p>
                        </MenuItem>
                    </span>
                </a>
                <a href={`${table}/edit/${id}`} style={{ textDecoration: "none" }}>
                    <span style={{ color: '#252a35' }}>
                        <MenuItem sx={menuitem_sx} onClick={handleCloseAction}>
                            <EditRoundedIcon sx={{ fontSize: "19px" }} />
                            <p className="text-gray-800 quicksand">Edit</p>
                        </MenuItem>
                    </span>
                </a>
                <span style={{ color: '#db514cff' }}>
                    <MenuItem sx={menuitem_sx} onClick={handleClickdelete}>
                        <DeleteRoundedIcon sx={{ fontSize: "19px" }} />
                        <p className="text-gray-800 quicksand">Delete</p>
                    </MenuItem>
                </span>
            </Menu>
        </>
    )
}