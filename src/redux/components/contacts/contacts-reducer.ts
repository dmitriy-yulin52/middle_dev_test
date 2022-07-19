import {ActionsType, initialState, InitialStateType, NamesType} from "./contacts-types";


export const ContactsReducer = (state:InitialStateType = initialState,action:ActionsType):InitialStateType=> {

    switch (action.type) {
        case NamesType.FETCH_CONTACTS:
            return {
                ...state,
                isLoading:true
            }
        case NamesType.SET_CONTACTS:
            return {
                ...state,
                items:action.payload,
                isLoading:false,
                isError:false
            }
        case NamesType.SET_IS_ERROR:
            return{
                ...state,
                isError:action.payload
            }
        case NamesType.SET_IS_LOADING:
            return {
                ...state,
                isLoading:action.payload
            }
        case NamesType.SET_MESSAGE_ERROR:
            return {
                ...state,
                messageError:action.payload
            }
        case NamesType.SET_SORT_TYPE:
            return {
                ...state,
                sortType:action.payload
            }
        default:
            return state;
    }
}
