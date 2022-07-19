import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {Box} from "@mui/material";
import {TableImpl} from "./Table";

type ContactsTableProps = {
    isLoading: boolean
    contacts:ContactsType[]
};
export const ContactsTable: FC<ContactsTableProps> = memo(({isLoading,contacts}): ReactElement => {

    return (
        <>
            {isLoading
                ? <Box width={'400px'} height={'200px'} fontSize={'100px'}>Loading.....</Box>
                : <TableImpl contacts={contacts}/>
            }
        </>
    );
});










