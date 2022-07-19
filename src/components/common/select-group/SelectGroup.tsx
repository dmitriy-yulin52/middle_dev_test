import * as React from 'react';
import {ChangeEvent, FC, memo, ReactElement} from 'react';
import {Box, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {ItemsType} from "../../ui/contacts-filters/ContactsFilters";

type SelectGroupProps<T> = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | SelectChangeEvent) => void
    items: T,
    name:string
};


export const SelectGroup: FC<SelectGroupProps<ItemsType[]>> = memo((props): ReactElement => {
    const {value, onChange, items,name} = props;
    return (
        <Box>
            <Select
                value={value}
                onChange={onChange}
                displayEmpty
                name={name}
            >
                {items.map((item)=><MenuItem key={item.title} value={item.value}>{item.title}</MenuItem>)}
            </Select>
        </Box>
    );
});