import * as React from 'react';
import {useTypedSelector} from "../../../utils/hooks/useTypedSelector";
import {ContactsViewType} from "../../../redux/components/contacts-view/contacts-view-types";
import {ContactsFilters} from "../contacts-filters/ContactsFilters";

type Props = {};

export const Home = (props: Props) => {

    const {view} = useTypedSelector(state => state.contactsView)

    return (
        <>
            <ContactsFilters/>
            {view === ContactsViewType.TILE_VIEW
                ? <div>TILE_VIEW</div>
                : <div>TABLE_VIEW</div>
            }
        </>
    );
};