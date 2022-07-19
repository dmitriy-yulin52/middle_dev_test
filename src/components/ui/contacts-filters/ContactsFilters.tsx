import * as React from 'react';
import {ChangeEvent, ReactElement, useCallback, useEffect, useState} from 'react';
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    SelectChangeEvent
} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {SelectGroup} from "../../common/select-group/SelectGroup";
import InputField from "../../common/InputField/InputField";
import useDebounce from "../../../utils/hooks/useDebounce";
import {ContactsFilterType} from "../../../redux/components/contacts-filter/contacts-filter-types";
import {useAction, usePartial} from "../../../utils/hooks/hooks-utils";
import {ContactsFilterActions} from "../../../redux/components/contacts-filter/contacts-filter-actions";

type Props = {};

const contactFilter = {
    name: '',
    gender: '',
    nationality: ''
}


export type ItemsType = {
    title: string,
    value: string
}

const items: ItemsType[] = [
    {title: 'gender', value: ''},
    {title: 'male', value: 'male'},
    {title: 'female', value: 'female'},
]

const sx = {
    m: 1
} as const


export const ContactsFilters = (props: Props):ReactElement => {
    const [filterState, setFilterState] = useState<ContactsFilterType>(contactFilter);

    const debouncedFilterState = useDebounce(filterState, 500);
    const setFilterValueHandler = useAction(usePartial(ContactsFilterActions.setFilterValue,filterState))

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | SelectChangeEvent) => {
        const {name, value} = e.target;
        setFilterState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }, [setFilterState])

    const resetFilterStateHandler = useCallback(()=>{
        setFilterState((prevState)=>({
            ...prevState,
            name:'',
            gender:'',
            nationality:''
        }))
    },[setFilterState])

    useEffect(()=>{
        setFilterValueHandler()
    },[debouncedFilterState])


    return (
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box width={'60%'}>
                <Box display={'flex'} alignItems={'center'}>
                    <FormControl fullWidth sx={sx} variant={'outlined'}>
                        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                        <OutlinedInput
                            value={filterState.name}
                            onChange={onChangeHandler}
                            endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                            label="Search"
                            name={'name'}
                            type={'text'}
                        />
                    </FormControl>
                    <Box marginRight={'8px'}>
                        <SelectGroup value={filterState.gender} onChange={onChangeHandler} items={items}
                                     name={'gender'}/>
                    </Box>
                    <Box >
                        <InputField value={filterState.nationality} onChange={onChangeHandler} label={'Nationality'}
                                    type={'text'} name={'nationality'}/>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <IconButton color={'primary'} onClick={resetFilterStateHandler}>
                    <ClearIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};