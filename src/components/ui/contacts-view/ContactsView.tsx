import * as React from 'react';
import {FC, memo, ReactElement} from "react";
import {ContactsViewType} from "../../../redux/components/contacts-view/contacts-view-types";
import {ContactsTable} from "./contacts-table/ContactsTable";
import {ContactsTile} from "./contacts-tile/contacts-tile";
import {useSelector} from "react-redux";
import {getContactParts} from "../../../redux/components/contacts/contacts-selectors";

type ContactsViewProps = {
    view: ContactsViewType
    isLoading: boolean
};
export const ContactsView: FC<ContactsViewProps> = memo((props): ReactElement => {
    const {view, isLoading} = props
    const contacts = useSelector(getContactParts)

    return (
        <>
            {view === ContactsViewType.TILE_VIEW
                ? <ContactsTile contacts={contacts} isLoading={isLoading}/>
                : <ContactsTable isLoading={isLoading} contacts={contacts}/>
            }
        </>
    );
});