import * as React from 'react';
import {FC, memo, ReactElement, useCallback, useState} from "react";
import {AppBar, Box, Button, styled, ToggleButton, ToggleButtonGroup, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

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
                        <ShowButtonLogin isAuth={isAuth} userName={userName} onClickLogoutHandler={() => {
                        }}/>
                    </Box>
                </Toolbar>
            </AppBar>
    );
});


const TypographyStyled = styled(Typography)`
    color:white;
`
const lists = [
    {id: 1, value: 'list', img: <ViewListIcon/>},
    {id: 2, value: 'module', img: <ViewModuleIcon/>},
]


type ButtonGroupProps = {
    userName: string
}

function ButtonGroupImpl(props: ButtonGroupProps): ReactElement {
    const {userName} = props;

    const [view, setView] = useState<string>('list');

    const handleChange = useCallback((event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    }, [setView]);


    return <Box display={'flex'} alignItems={'center'}>
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
        >
            {lists.map((el, index) => (
                <ToggleButtonStyled key={el.id + index} value={el.value} aria-label={el.value}>
                    {el.img}
                </ToggleButtonStyled>
            ))}
        </ToggleButtonGroup>
        <Box display={'flex'} alignItems={'center'}>
            <Box color={'white'} marginLeft={'8px'}>{userName}</Box>
            <ButtonStyled color={'primary'} variant={'outlined'}>Выйти</ButtonStyled>
        </Box>
    </Box>
}

const ButtonGroup = memo(ButtonGroupImpl);


const ButtonStyled = styled(Button)`
    color: white;
    margin-left: 8px;
    display:flex;
    alignItems:center;
`
const ToggleButtonStyled = styled(ToggleButton)`
    color: white;
`

type ShowButtonLogin = {
    isAuth: boolean
    userName: string
    onClickLogoutHandler: () => void
}

function ShowButtonLoginImpl(props: ShowButtonLogin): ReactElement {
    const {isAuth, userName, onClickLogoutHandler} = props;
    return (
        <>
            {isAuth
                ? <ButtonGroup userName={userName}/>
                : <Button color="inherit">Login</Button>
            }
        </>
    )
}

const ShowButtonLogin = memo(ShowButtonLoginImpl);

