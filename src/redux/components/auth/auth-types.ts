
/** types */
export enum NamesTypeAction {
    SET_AUTH = 'auth/SET_AUTH',
    SET_IS_ERROR = 'auth/SET_IS_ERROR',
    SET_USER = 'auth/SET_USER',
    SET_MESSAGE_ERROR = 'auth/SET_MESSAGE_ERROR',
    SET_IS_LOADING = 'auth/SET_IS_LOADING',
}

/** state */
export type IUser = {
    userName: string,
    password: string,
}

export type AuthStateType = {
    isAuth: boolean,
    user: IUser,
    isError: boolean,
    messageError: null | string,
    isLoading:boolean
}

export const initialState = {
    isAuth: false,
    user: {} as IUser,
    isError: false,
    messageError: null,
    isLoading:false
}

/** actions */
export type SetAuthType = {
    type: NamesTypeAction.SET_AUTH,
    payload: boolean
}
export type SetIsErrorType = {
    type: NamesTypeAction.SET_IS_ERROR,
    payload: boolean
}
export type SetUserType = {
    type: NamesTypeAction.SET_USER,
    payload: IUser
}
export type SetMessageErrorType = {
    type: NamesTypeAction.SET_MESSAGE_ERROR,
    payload: string | null
}
export type SetIsLoadingType = {
    type: NamesTypeAction.SET_IS_LOADING,
    payload: boolean
}

export type ActionsType =
    SetAuthType
    | SetIsErrorType
    | SetUserType
    | SetMessageErrorType
    | SetIsLoadingType

