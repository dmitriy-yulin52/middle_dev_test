import {RootStateType} from "../../store";
import {ContactsSortType, ContactsType, InitialStateType} from "./contacts-types";
import {createSelector} from "reselect";
import {ContactsFilterType} from "../contacts-filter/contacts-filter-types";
import {NATIONAL_ABB} from "../../../assets/national-color";


const contacts = (state: RootStateType): InitialStateType => state.contacts
const contactsFilter = (state: RootStateType): ContactsFilterType => state.contactsFilter
const contactsItems = (state: RootStateType): ContactsType[] => contacts(state).items
const sortType = (state: RootStateType): ContactsSortType => contacts(state).sortType
const currentPage = (state: RootStateType): number => contacts(state).currentPage
const totalPage = (state: RootStateType): number => contacts(state).totalPage


export const getFiltredContacts = createSelector(
    [contactsItems, contactsFilter],
    (contacts, filterValue) => {
        return contacts.filter((contact) => {
            const fullname = `${contact.name.first} ${contact.name.last}`.toLowerCase();
            const national = (NATIONAL_ABB[contact.nat] || "").toLowerCase();
            const isFullNameCoincidence = filterValue.name ? fullname.includes(filterValue.name) : true;
            const isNationalCoincidence = filterValue.nationality ? national.includes(filterValue.nationality) : true;
            const isGenderCoincidence = filterValue.gender ? contact.gender === filterValue.gender : true;
            return isFullNameCoincidence && isNationalCoincidence && isGenderCoincidence;
        });
    },
);

export const getSortedContacts = createSelector(
    [getFiltredContacts, sortType],
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

export const getContactParts = createSelector(
  [getSortedContacts, totalPage, currentPage],
  (contacts, pageCapacity, page) => {
    return contacts.slice((page - 1) * pageCapacity, page * pageCapacity);
  },
);


type NationalAccType = {
    [key:string]:number
}

export const getStatistic = createSelector(
    [contactsItems],
    (contacts) => {
        return contacts.reduce((acc, contact) => {
                acc.collectionsize += 1
                if (contact.gender === 'male') {
                    acc.males += 1
                } else if (contact.gender === 'female') {
                    acc.females += 1
                } else {
                    acc.indeterminate += 1
                }
                const national = NATIONAL_ABB[contact.nat ?? 'German'];
                if (!acc.nationals[national]) {
                    acc.nationals[national] = 1
                } else {
                    acc.nationals[national] += 1;
                }
            return acc
            }, {
                collectionsize: 0,
                males: 0,
                females: 0,
                indeterminate: 0,
                nationals: {} as NationalAccType,
            }
        )
    }
)
