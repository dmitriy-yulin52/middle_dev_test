import * as React from 'react';
import {Box} from "@mui/material";
import {Header} from "./header/Header";
import {Outlet} from "react-router-dom";
import {IUser} from "../../redux/components/auth/auth-types";
import {FC, memo, ReactElement} from "react";
import {ContactsFilters} from "./contacts-filters/ContactsFilters";

type LayoutProps = {
    userName:string,
    isAuth:boolean
};
export const Layout:FC<LayoutProps> = memo(({userName,isAuth}):ReactElement => {

    return (
        <Box>
            <Header userName={userName} isAuth={isAuth}/>
            <Outlet/>
        </Box>
    );
});