import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {Button} from "@mui/material";
import {AuthActionsCreators} from "./redux/components/auth/auth-actions";
import {RequireAuth} from "./components/RequireAuth";
import {Home} from "./components/ui/home/Home";
import {Layout} from "./components/ui/Layout";

function App() {


    const {isAuth,user} = useSelector((state: RootStateType) => state.auth)
    const dispatch = useDispatch()


    const clickHandler = () => {
        dispatch(AuthActionsCreators.setAuth(true))
    }


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
        </div>
    );
}

export default App;
