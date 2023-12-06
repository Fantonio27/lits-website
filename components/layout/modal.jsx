import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ open, instruction, cancel, submit, input, remove }) => {

    const [text, settext] = useState()

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
            maxWidth={instruction.size}
        >
            <DialogTitle><p className='SignOut-title'>{instruction.title}</p></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <span className='SignOut-text'>{instruction.description}</span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button onClick={method} className='SignOut-cancel-button'>Cancel</button>
                <button onClick={method} className='SignOut-confirm-button'>Confirm</button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal 