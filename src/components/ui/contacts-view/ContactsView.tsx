import * as React from 'react';
import {FC, memo, ReactElement} from "react";
import {Box} from "@mui/material";
import {ContactsViewType} from "../../../redux/components/contacts-view/contacts-view-types";
import {ContactsType} from "../../../redux/components/contacts/contacts-types";
import {ContactsTable} from "./contacts-table/ContactsTable";

type ContactsViewProps = {
    view: ContactsViewType
    isLoading: boolean
    contacts: ContactsType[]
};
export const ContactsView: FC<ContactsViewProps> = memo((props): ReactElement => {

    const {view, isLoading, contacts} = props

    return (
        <Box padding={'16px'}>
            {view === ContactsViewType.TILE_VIEW
                ? <div>TILE_VIEW</div>
                : <ContactsTable contacts={contacts} isLoading={isLoading}/>
            }
        </Box>
    );
});