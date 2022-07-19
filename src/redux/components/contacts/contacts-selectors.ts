import {RootStateType} from "../../store";
import {ContactsSortType, ContactsType, InitialStateType} from "./contacts-types";
import {createSelector} from "reselect";


const contacts = (state: RootStateType): InitialStateType => state.contacts
const contactsItems = (state: RootStateType): ContactsType[] => contacts(state).items
const sortType = (state: RootStateType): ContactsSortType => contacts(state).sortType


export const getSortedContacts = createSelector(
    [contactsItems, sortType],
    (contacts, sortType) => {
        switch (sortType) {
            case ContactsSortType.NOT_SORTED:
                return contacts;
            case ContactsSortType.BY_NAME_ASC:
                return [...contacts].sort((a, b) => a.name.first.localeCompare(b.name.first))
            case ContactsSortType.BY_NAME_DESC:
                return [...contacts].sort((a, b) => b.name.first.localeCompare(a.name.first))
            default:
                return contacts
        }
    }
)