import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {Box, CircularProgress} from "@mui/material";
import {TableImpl} from "./Table";

type ContactsTableProps = {
    isLoading: boolean
    contacts: ContactsType[]
};
export const ContactsTable: FC<ContactsTableProps> = memo(({isLoading, contacts}): ReactElement => {

    return (
        <>
            {isLoading
                ? <Box  height={'calc(100vh - 64px)'} fontSize={'100px'} display={'flex'}
                       justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress/>
                </Box>
                : <TableImpl contacts={contacts}/>
            }
        </>
    );
});










