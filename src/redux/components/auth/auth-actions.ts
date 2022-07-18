import {
    IUser,
    NamesTypeAction,
    SetIsAuthType,
    SetIsErrorType,
    SetIsLoadingType,
    SetMessageErrorType,
    SetUserType
} from "./auth-types";
import {DispatchType} from "../../store";
import {authApi} from "../../../api/auth-api/auth-api";


export const AuthActionsCreators = {
    setIsAuth: (isAuth: boolean): SetIsAuthType => ({
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
    login: loginThunk,
    logout: logoutThunk
}


function loginThunk(userName: string, password: string) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(AuthActionsCreators.setIsLoading(true));
            const response = await authApi.getUsers();
            const mockUser = response.data.find((user) => user.userName === userName && user.password === password);
            if (mockUser) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('userName', mockUser.userName);
                dispatch(AuthActionsCreators.setIsAuth(true));
                dispatch(AuthActionsCreators.setUser(mockUser));
            } else {
                dispatch(AuthActionsCreators.setIsError(true));
                dispatch(AuthActionsCreators.setMessageError('Некорректный логин или пароль'))
            }
            dispatch(AuthActionsCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionsCreators.setIsError(true));
            dispatch(AuthActionsCreators.setMessageError('Произошла ошибка при логине'))
        }
    }
}

function logoutThunk() {
    return (dispatch: DispatchType) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('userName');
        dispatch(AuthActionsCreators.setUser({} as IUser));
        dispatch(AuthActionsCreators.setIsAuth(false));
    }
}