import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ open, cancel, method, id}) => {

    const deletecontent = {
        title: `Delete this Record?`,
        description: `Are you sure you want to delete this record (${id})`,
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
        >
            <DialogTitle><p className='blue quicksand'>{deletecontent.title}</p></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <span className='text-15 quicksand darkblue'>{deletecontent.description}</span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button onClick={cancel} className='rounded-md mb-3 text-15 quicksand border transition-all hover:bg-gray-100 border-gray-300 px-5 py-2'>Cancel</button>
                <button onClick={method} className='rounded-md  mb-3 mr-5 text-15 text-white quicksand bg-sky-500 px-5 py-2 transition-all hover:bg-sky-600'>Confirm</button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal 