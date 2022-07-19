import * as React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {getFormatedData} from "../../../../assets/data-converter";
import {UserAvatar, UserNation} from "../contacts-table/ContactsTableStyles";
import {ClipCopy} from "../../clip-copy/ClipCopy";
import TableContainer from "@mui/material/TableContainer";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {FC, memo, ReactElement} from "react";
import {ContactsSortType, ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {SortNameButton} from "../../sort-name-button/SortNameButton";

type TileProps = {
    contacts: ContactsType[]
    sortType: ContactsSortType
};


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1976d2',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const sx = {
    minWidth: 700
} as const

export const Tile: FC<TileProps> = memo(({contacts,sortType}): ReactElement => {
    return (
        <TableContainer component={Paper}>
            <Table sx={sx} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Avatar</StyledTableCell>
                        <StyledTableCell align="left">
                            <SortNameButton sortType={sortType}>Full name</SortNameButton>
                        </StyledTableCell>
                        <StyledTableCell align="left">Birthday</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Phone</StyledTableCell>
                        <StyledTableCell align="center">Location</StyledTableCell>
                        <StyledTableCell align="right">Nationality</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((user) => {
                        const {
                            birthday,
                            email,
                            fullName,
                            location,
                            phone,
                            national,
                            nationalColor,
                        } = getFormatedData(user);
                        return (
                            <StyledTableRow key={fullName}>
                                <StyledTableCell component="th" scope="row">
                                    <UserAvatar className="cell-image" src={user.picture.thumbnail} alt="avatar"/>
                                </StyledTableCell>
                                <StyledTableCell align="left">{fullName}</StyledTableCell>
                                <StyledTableCell align="left">{birthday}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <ClipCopy href={`mailto:${email}`}>{email}</ClipCopy>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <ClipCopy href={`tel:${phone}`}>{phone}</ClipCopy>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <ClipCopy>{location}</ClipCopy>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <UserNation color={nationalColor.color}
                                                inverted={nationalColor.inverted}>
                                        {national ? national : 'German'}
                                    </UserNation>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
});