import * as React from 'react';
import {useTypedSelector} from "../utils/hooks/useTypedSelector";
import {FC, ReactElement, ReactNode} from "react";
import {Login} from "../pages/Login";

type RequireAuthProps = {
    children: ReactNode
};

export const RequireAuth: FC<RequireAuthProps> = ({children}): ReactElement => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <>
            {isAuth
                ? children
                : <Login/>
            }
        </>
    );
};