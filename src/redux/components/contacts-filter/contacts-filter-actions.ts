import {ContactsFilterType, ResetFilterValue, SetFilterValue, TypeNames} from "./contacts-filter-types";


export const ContactsFilterActions = {
    setFilterValue: (payload: ContactsFilterType): SetFilterValue => ({type: TypeNames.SET_FILTER_VALUE, payload}),
    resetFilterValue: (): ResetFilterValue => ({type: TypeNames.RESET_FILTER_VALUE}),
}