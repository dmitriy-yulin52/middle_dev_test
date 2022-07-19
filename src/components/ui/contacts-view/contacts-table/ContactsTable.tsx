import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {Box} from "@mui/material";
import {Table} from "./Table";

type ContactsTableProps = {
    contacts: ContactsType[]
    isLoading: boolean
};
export const ContactsTable: FC<ContactsTableProps> = memo(({contacts, isLoading}): ReactElement => {
    return (
        <Box>
            {isLoading
                ? <Box width={'400px'} height={'200px'} fontSize={'100px'}>Loading.....</Box>
                // : <>{contacts.map((contact) => <Box key={contact.email}>{contact.email}</Box>)}</>
                : <Table contacts={contacts}/>
            }
        </Box>
    );
});










