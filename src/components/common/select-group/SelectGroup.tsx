import * as React from 'react';
import {Box, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {ChangeEvent, FC, memo, ReactElement} from "react";
import {TitlesType} from "../../ui/contacts-filters/ContactsFilters";

type SelectGroupProps<T> = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | SelectChangeEvent) => void
    titles: T,
    name:string
};


export const SelectGroup: FC<SelectGroupProps<TitlesType[]>> = memo((props): ReactElement => {
    const {value, onChange, titles,name} = props;
    return (
        <Box>
            <Select
                value={value}
                onChange={onChange}
                displayEmpty
                name={name}
            >
                {titles.map((item)=><MenuItem key={item.title} value={item.value}>{item.title}</MenuItem>)}
            </Select>
        </Box>
    );
});