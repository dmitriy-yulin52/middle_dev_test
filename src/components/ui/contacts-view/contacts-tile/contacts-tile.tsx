import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {Tile} from "./Tile";
import {Box} from "@mui/material";
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
                ? <Box width={'400px'} height={'200px'} fontSize={'100px'}>Loading.....</Box>
                : <Tile contacts={contacts} sortType={sortType}/>
            }
        </>
    );
});