import * as React from 'react';
import {FC, ReactElement, useCallback} from "react";
import {Box, Button, styled, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {AuthActionsCreators} from "../redux/components/auth/auth-actions";
import {Form, useForm} from "../utils/hooks/useForm";
import {validatorConfig} from "../utils/validator/validatorConfig";
import InputField from "../components/ui/InputField/InputField";

type LoginProps = {};


const userData = {
    userName: '',
    password: ''
} as const

export const Login: FC<LoginProps> = (props): ReactElement => {

    const {data, handleInputChange, handleResetForm, errors, validate} = useForm(userData, true, validatorConfig)

    const dispatch = useDispatch()


    const handleSubmit = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('fffdg')
        if (validate(data)) {
            handleResetForm(e)
        }
    }, [data, handleResetForm, validate]);

    console.log(data,'data')

    return (
        <Form data={data} errors={errors} onChange={handleInputChange}>
            <InputField autoFocus name={'userName'} label={'UserName'} required/>
            <InputField type={'password'} name={'password'} label={'UserName'}/>
            <Button type={'submit'} color={'primary'} variant={'contained'} onClick={handleSubmit}
                    disabled={Object.keys(errors).length !== 0}>SignIn</Button>
        </Form>
    )
};
