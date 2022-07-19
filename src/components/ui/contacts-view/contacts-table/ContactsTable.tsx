import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {Box} from "@mui/material";
import {Table} from "./Table";
import {useTypedSelector} from "../../../../utils/hooks/useTypedSelector";
import {getSortedContacts} from "../../../../redux/components/contacts/contacts-selectors";
import {useSelector} from "react-redux";

type ContactsTableProps = {
    contacts: ContactsType[]
    isLoading: boolean
};
export const ContactsTable: FC<ContactsTableProps> = memo(({isLoading}): ReactElement => {
    const {sortType,items} = useTypedSelector(state => state.contacts)
    const contacts = useSelector(getSortedContacts)

    return (
        <Box>
            {isLoading
                ? <Box width={'400px'} height={'200px'} fontSize={'100px'}>Loading.....</Box>
                : <Table contacts={contacts} sortType={sortType}/>
            }
        </Box>
    );
});










