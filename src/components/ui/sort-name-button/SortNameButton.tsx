import * as React from 'react';
import {FC, memo, ReactElement, ReactNode, useCallback} from "react";
import {Box} from "@mui/material";
import {useAction} from "../../../utils/hooks/hooks-utils";
import {ContactsActions} from "../../../redux/components/contacts/contacts-actions";
import {ContactsSortType} from "../../../redux/components/contacts/contacts-types";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type SortNameButtonProps = {
    children: ReactNode
    sortType: ContactsSortType
};

const styled = {
    cursor: 'pointer'
} as const


export const SortNameButton: FC<SortNameButtonProps> = memo((props): ReactElement => {
    const {children, sortType} = props;
    const setSortTypeHandler = useAction(ContactsActions.setSortType)

    const onClickHandler = useCallback(() => {
        switch (sortType) {
            case ContactsSortType.BY_NAME_ASC:
                setSortTypeHandler(ContactsSortType.BY_NAME_DESC)
                break;
            case ContactsSortType.NOT_SORTED:
                setSortTypeHandler(ContactsSortType.BY_NAME_ASC)
                break;
            default:
                setSortTypeHandler(ContactsSortType.NOT_SORTED)
        }
    }, [sortType, setSortTypeHandler]);
    return (
        <Box onClick={onClickHandler} style={styled} display={'flex'} alignItems={'center'}>
            {children}
            <Box marginLeft={'8px'} display={'flex'} flexDirection={'column'}>
                {sortType === ContactsSortType.BY_NAME_ASC ?
                    <ArrowDropUpIcon/> : sortType === ContactsSortType.BY_NAME_DESC ? <ArrowDropDownIcon/> : null}
            </Box>
        </Box>
    );
});


