import {ActionsType, AuthStateType, initialState, NamesTypeAction} from "./auth-types";


export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case NamesTypeAction.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false
            }
        case NamesTypeAction.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case NamesTypeAction.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case NamesTypeAction.SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        case NamesTypeAction.SET_MESSAGE_ERROR:
            return {
                ...state,
                messageError: action.payload
            }
        default:
            return state
    }
}