import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {Tile} from "./Tile";
import {Box, CircularProgress} from "@mui/material";
import {useTypedSelector} from "../../../../utils/hooks/useTypedSelector";


type ContactsTileProps = {
    contacts: ContactsType[]
    isLoading: boolean
};

export const ContactsTile: FC<ContactsTileProps> = memo(({contacts, isLoading}): ReactElement => {

    const {sortType} = useTypedSelector(state => state.contacts)

    return (
        <>
            {isLoading
                ? <Box  height={'calc(100vh - 64px)'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress />
                </Box>
                : <Tile contacts={contacts} sortType={sortType}/>
            }
        </>
    );
});