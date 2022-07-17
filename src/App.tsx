import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {Button} from "@mui/material";
import {AuthActionsCreators} from "./redux/components/auth/auth-actions";

function App() {



    const {isAuth} = useSelector((state:RootStateType) =>state.auth )
    const dispatch = useDispatch()



    const clickHandler = ()=> {
        dispatch(AuthActionsCreators.setAuth(true))
    }


    return (
        <div className="App">
            <Routes>
                { isAuth ? <Route path={'/'} element={<div>home</div>}/> : <Route path={'/login'} element={<div>login<Button color={'primary'} variant={'contained'} onClick={clickHandler}>click</Button></div>}/>}
            </Routes>
        </div>
    );
}

export default App;
