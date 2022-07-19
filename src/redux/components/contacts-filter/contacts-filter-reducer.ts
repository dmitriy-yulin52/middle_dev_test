import {ActionsType, ContactsFilterType, initialState, TypeNames} from "./contacts-filter-types";


export const ContactsFilterReducer = (state: ContactsFilterType = initialState, action: ActionsType): ContactsFilterType => {
    switch (action.type) {
        case TypeNames.SET_FILTER_VALUE:
            const {name, gender, nationality} = action.payload;
            return {
                ...state,
                name,
                gender,
                nationality
            }
        case TypeNames.RESET_FILTER_VALUE:
            return {
                ...state,
                name: '',
                gender: '',
                nationality: ''
            }
        default:
            return state;
    }
}

