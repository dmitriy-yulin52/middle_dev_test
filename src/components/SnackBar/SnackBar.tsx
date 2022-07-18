import * as React from 'react';
import {FC, memo, ReactElement} from "react";
import {Alert, Snackbar} from "@mui/material";
import {AlertColor} from "@mui/material/Alert/Alert";

type SnackBarProps = {
    open:boolean,
    messageError:string | null,
    severity:AlertColor,
    onClose:()=>void
};

const sx = {
    width: '100%'
} as const

const anchorOrigin = {
    vertical:'bottom', horizontal:'center'
}as const


export const SnackBar: FC<SnackBarProps> = memo((props): ReactElement => {
    const {open,messageError,severity,onClose}= props

    return (
        <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={4000} onClose={onClose}>
            <Alert onClose={onClose} severity={severity} sx={sx}>
                {messageError ? messageError : 'Error'}
            </Alert>
        </Snackbar>
    );
});