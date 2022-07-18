import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {AppBar, Box, Button, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {RadioButtonGroup} from "../../common/radio-button-group/RadioButtonGroup";

type HeaderProps = {
    userName: string,
    isAuth: boolean,
};

const sx = {
    flexGrow: 1
} as const


export const Header: FC<HeaderProps> = memo(({userName, isAuth}): ReactElement => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    {isAuth
                        ? <Link to={'/'}><TypographyStyled variant="h6" sx={sx}>
                            Contacts
                        </TypographyStyled></Link>
                        : <Link to={'/login'}><TypographyStyled variant="h6" sx={sx}>
                            LoginPage
                        </TypographyStyled></Link>
                    }
                    <AuthButton isAuth={isAuth} userName={userName}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
});

const TypographyStyled = styled(Typography)`
    color:white;
`

type ShowButtonLogin = {
    isAuth: boolean
    userName: string
}

function AuthButtonImpl(props: ShowButtonLogin): ReactElement {
    const {isAuth, userName} = props;
    return (
        <>
            {isAuth
                ? <RadioButtonGroup userName={userName}/>
                : <Button color="inherit">Login</Button>
            }
        </>
    )
}

const AuthButton = memo(AuthButtonImpl);

