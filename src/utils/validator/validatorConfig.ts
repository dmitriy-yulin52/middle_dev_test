import {IUser} from "../../redux/components/auth/auth-types";
import {ValidatorConfigType} from "./validator";


export type ConfigType = {
    [Property in keyof IUser]?: ValidatorConfigType
}

export const validatorConfig:ConfigType = {
    userName: {
        isRequired: {
            message: 'Поле "Имя" обязательно для заполнения'
        }
    },
    password: {
        isRequired: {
            message: 'Поле "Пароль" обязательно для заполнения',
        },
        isCapitalSymbol: {
            message: 'Пароль должен содержать хотя бы 1 заглавную букву',
        },
        isContainDigit: {
            message: 'Пароль должен содержать хотя бы 1 цифру',
        },
        min: {
            value: 8,
            message: 'Пароль должен содержать минимум 8 символов',
        },
    }
}