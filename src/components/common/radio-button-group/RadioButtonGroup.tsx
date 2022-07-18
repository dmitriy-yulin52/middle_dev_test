import {Box, Button as ButtonImpl, styled, ToggleButton as ToggleButtonImpl, ToggleButtonGroup, Typography} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import {ContactsViewType} from "../../../redux/components/contacts-view/contacts-view-types";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import {memo, ReactElement, useCallback, useState} from "react";
import {useAction} from "../../../utils/hooks/hooks-utils";
import {ContactsViewActions} from "../../../redux/components/contacts-view/contacts-view-actions";
import {AuthActionsCreators} from "../../../redux/components/auth/auth-actions";
import * as React from "react";


const buttons = [
    {id: 1, img: <ViewListIcon/>, name: 'tile-view', value: ContactsViewType.TILE_VIEW},
    {id: 2, img: <ViewModuleIcon/>, name: 'table-view', value: ContactsViewType.TABLE_VIEW},
]as const

type ButtonGroupProps = {
    userName: string
}

function RadioButtonGroupImpl(props: ButtonGroupProps): ReactElement {
    const {userName} = props;

    const [view, setView] = useState<{value:string}>({value:ContactsViewType.TILE_VIEW});
    const onContactsViewTypeHandler = useAction(ContactsViewActions.changeViewType);
    const onLogoutHandler = useAction(AuthActionsCreators.logout)

    const handleChange = useCallback((event: React.MouseEvent<HTMLElement>, nextView: ContactsViewType) => {
        setView({value:nextView});
        onContactsViewTypeHandler(nextView)
    }, [setView,onContactsViewTypeHandler]);


    return <Box display={'flex'} alignItems={'center'}>
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
        >
            {buttons.map((el, index) => (
                <ToggleButton defaultChecked={view.value === el.value} key={el.id + index} value={el.value} aria-label={el.value}>
                    {el.img}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
        <Box display={'flex'} alignItems={'center'}>
            <Box color={'white'} marginLeft={'8px'}>{userName}</Box>
           <Button onClick={onLogoutHandler} color={'primary'} variant={'outlined'}>Выйти</Button>
        </Box>
    </Box>
}

export const RadioButtonGroup = memo(RadioButtonGroupImpl);


const Button= styled(ButtonImpl)`
    color: white;
    margin-left: 8px;
    display:flex;
    alignItems:center;
`
const ToggleButton = styled(ToggleButtonImpl)`
    color: white;
`
