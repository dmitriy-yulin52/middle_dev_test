import {ActionsType, initialState, initialStateType, TypeNames} from "./contacts-view-types";


export const ContactsViewReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case TypeNames.CHANGE_VIEW_TYPE:
            return {
                ...state,
                view: action.payload
            }

        default:
            return state
    }
}