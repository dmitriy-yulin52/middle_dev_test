import {
    IUser,
    NamesTypeAction,
    SetAuthType,
    SetIsErrorType,
    SetIsLoadingType,
    SetMessageErrorType,
    SetUserType
} from "./auth-types";


export const AuthActionsCreators = {
    setAuth: (isAuth: boolean): SetAuthType => ({
        type: NamesTypeAction.SET_AUTH,
        payload: isAuth
    }),
    setUser: (user: IUser): SetUserType => ({type: NamesTypeAction.SET_USER, payload: user}),
    setIsError: (isError: boolean): SetIsErrorType => ({type: NamesTypeAction.SET_IS_ERROR, payload: isError}),
    setMessageError: (messageError: string): SetMessageErrorType => ({
        type: NamesTypeAction.SET_MESSAGE_ERROR,
        payload: messageError
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingType => ({
        type: NamesTypeAction.SET_IS_LOADING,
        payload: isLoading
    }),
}