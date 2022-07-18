import * as React from 'react';
import {FC, ReactElement, useCallback, useEffect} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Form, useForm} from "../utils/hooks/useForm";
import {validatorConfig} from "../utils/validator/validatorConfig";
import InputField from "../components/ui/InputField/InputField";
import {preventDefault, useAction} from "../utils/hooks/hooks-utils";
import axios from "axios";
import {contactsApi} from "../api/contacts-api/contsacts-api";
import {AuthActionsCreators} from "../redux/components/auth/auth-actions";


type LoginProps = {};


const userData = {
    userName: '',
    password: ''
} as const

async function fetch() {
    // const data = await contactsApi.getContacts(200,10)
    const data = await axios.get(' https://randomuser.me/api/?results=200')
}


export const Login: FC<LoginProps> = (props): ReactElement => {

    const {data, handleInputChange, handleResetForm, errors, validate} = useForm(userData, true, validatorConfig)
    const onLoginHandler = useAction(AuthActionsCreators.login)

    const handleSubmit = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
        preventDefault(e)
        if (validate(data)) {
            handleResetForm(e)
            onLoginHandler(data.userName,data.password)
        }
    }, [data, handleResetForm, validate,onLoginHandler]);


    useEffect(() => {
        fetch()
    }, [])




    return (
        <>
            <Form data={data} errors={errors} onChange={handleInputChange}>
                <InputField autoFocus name={'userName'} label={'UserName'} required/>
                <InputField type={'password'} name={'password'} label={'UserName'}/>
                <Button type={'submit'} color={'primary'} variant={'contained'} onClick={handleSubmit}
                        disabled={Object.keys(errors).length !== 0}>SignIn</Button>
            </Form>

        </>

    )
};
