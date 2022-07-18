import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {AuthActionsCreators} from "./redux/components/auth/auth-actions";
import {RequireAuth} from "./components/RequireAuth";
import {Home} from "./components/ui/home/Home";
import {Layout} from "./components/ui/Layout";
import {useAction, usePartial} from "./utils/hooks/hooks-utils";
import {SnackBar} from "./components/SnackBar/SnackBar";

function App() {

    const {isAuth, user,messageError,isError} = useSelector((state: RootStateType) => state.auth)

    const onAuthHandler = useAction(usePartial(AuthActionsCreators.setIsAuth, true));
    const setIsError = useAction(usePartial(AuthActionsCreators.setIsError, false))


    useEffect(() => {
        if (localStorage.getItem('auth')) {
            onAuthHandler()
        }
    }, [])


    return (
        <div className="App">
            <Routes>
                <Route element={<Layout userName={user.userName} isAuth={isAuth}/>}>
                    <Route path={'/'} element={
                        <RequireAuth>
                            <Home/>
                        </RequireAuth>
                    }/>
                </Route>
            </Routes>
            <SnackBar open={isError} messageError={messageError} severity={'error'} onClose={setIsError}/>
        </div>
    );
}

export default App;
