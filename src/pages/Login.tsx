import * as React from 'react';
import {FC, ReactElement, useCallback} from 'react';
import {Button} from "@mui/material";
import {Form, useForm} from "../utils/hooks/useForm";
import {validatorConfig} from "../utils/validator/validatorConfig";
import InputField from "../components/common/InputField/InputField";
import {preventDefault, useAction} from "../utils/hooks/hooks-utils";
import {AuthActionsCreators} from "../redux/components/auth/auth-actions";



const userData = {
    userName: '',
    password: ''
} as const

export const Login: FC = (): ReactElement => {

    const {data, handleInputChange, handleResetForm, errors, validate} = useForm(userData, true, validatorConfig)
    const onLoginHandler = useAction(AuthActionsCreators.login)

    const handleSubmit = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
        preventDefault(e)
        if (validate(data)) {
            handleResetForm(e)
            onLoginHandler(data.userName,data.password)
        }
    }, [data, handleResetForm, validate,onLoginHandler]);


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
