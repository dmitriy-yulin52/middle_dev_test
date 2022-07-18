import React, {ChangeEvent, ReactElement} from 'react';
import {SelectChangeEvent, TextField, TextFieldProps as MuiTextFieldProps} from '@mui/material';

type InputTypes = {
    type?: string;
    label?: string;
    name: string;
    placeholder?: string;
    value?: string;
    error?: string | null;
    autoFocus?: boolean;
} & MuiTextFieldProps;

const InputField: React.FC<InputTypes> = (props): ReactElement => {

    const {
        name,
        label,
        type = 'text',
        value,
        onChange,
        error = false,
        ...rest
    } = props
    return (
        <TextField
            variant='outlined'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            {...rest}
            error={error && true}
            helperText={error}
        />
    );
};

export default React.memo(InputField);