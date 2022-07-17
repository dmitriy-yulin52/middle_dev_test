import * as React from 'react';
import {FC, ReactElement} from "react";
import {Box, TextField} from "@mui/material";

type LoginProps = {};
export const Login: FC<LoginProps> = (props): ReactElement => {
    return (
        <Box>
            <TextField variant={'outlined'} placeholder={'UserName'}/>
            <TextField variant={'outlined'} placeholder={'Password'}/>
        </Box>
    );
};