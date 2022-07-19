import * as React from 'react';
import {FC, ReactElement, useEffect} from 'react';
import {useAction} from "../../../utils/hooks/hooks-utils";
import {useTypedSelector} from "../../../utils/hooks/useTypedSelector";
import {ContactsFilters} from "../contacts-filters/ContactsFilters";
import {ContactsActions} from "../../../redux/components/contacts/contacts-actions";
import {ContactsView} from "../contacts-view/ContactsView";

type Props = {};


export const Home:FC = ():ReactElement => {

    const {view} = useTypedSelector(state => state.contactsView);
    const {isLoading,items} = useTypedSelector(state => state.contacts);
    const fetchContactsHandler = useAction(ContactsActions.fetchContacts)

    useEffect(()=>{
        fetchContactsHandler()
    },[])


    return (
        <>
            <ContactsFilters/>
            <ContactsView view={view} isLoading={isLoading} contacts={items}/>
        </>
    );
};