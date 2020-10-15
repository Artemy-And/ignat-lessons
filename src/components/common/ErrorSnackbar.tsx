import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAppErrorAC} from "../../redux/app-reducer";
// import {AppRootStateType} from "../../app/store";
// import {setAppErrorAC} from "../../app/app-reducer";


function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export function ErrorSnackbar() {


    const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
   const dispatch = useDispatch()

    const handleClick = () => {
        //setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppErrorAC(null))

    };

    const isOpen = error !== null

    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose}>{error}</Alert>
        </Snackbar>


    );
}