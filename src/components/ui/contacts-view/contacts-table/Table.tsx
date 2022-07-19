import {ContactsSortType, ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {memo, ReactElement} from "react";
import {Box} from "@mui/material";
import {getFormatedData} from "../../../../assets/data-converter";
import * as React from "react";
import {
    TableContainer,
    TableHead,
    TableHeadRow,
    Wrapper,
    TableCell,
    TableBodyRow,
    UserAvatar,
    UserNation
} from "./ContactsTableStyles";
import {ClipCopy} from "../../clip-copy/ClipCopy";
import {SortNameButton} from "../../sort-name-button/SortNameButton";

type TableType = {
    contacts: ContactsType[]
    sortType: ContactsSortType
}

function TableImpl(props: TableType): ReactElement {
    const {contacts,sortType} = props
    return (
        <Wrapper>
            <TableContainer>
                <TableHead>
                    <TableHeadRow>
                        <TableCell width="7rem" align="center">
                            Avatar
                        </TableCell>
                        <TableCell>
                            <SortNameButton sortType={sortType}>Full name</SortNameButton>
                        </TableCell>
                        <TableCell>Birthday</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell addaptiveHide align="right">Nationality</TableCell>
                    </TableHeadRow>
                </TableHead>
                <tbody>
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
                        <TableBodyRow key={phone}>
                            <TableCell width="5%">
                                <UserAvatar className="cell-image" src={user.picture.thumbnail} alt="avatar"/>
                            </TableCell>
                            <TableCell>
                                <a href="/">{fullName}</a>
                            </TableCell>
                            <TableCell>{birthday}</TableCell>
                            <TableCell>
                                <ClipCopy href={`mailto:${email}`}>{email}</ClipCopy>
                            </TableCell>
                            <TableCell>
                                <ClipCopy href={`tel:${phone}`}>{phone}</ClipCopy>
                            </TableCell>
                            <TableCell>
                                <ClipCopy>{location}</ClipCopy>
                            </TableCell>
                            <TableCell addaptiveHide align="right">
                                <UserNation color={nationalColor.color} inverted={nationalColor.inverted}>
                                    {national ? national : 'German'}
                                </UserNation>
                            </TableCell>
                        </TableBodyRow>
                    );
                })}
                </tbody>
            </TableContainer>
        </Wrapper>
    )
}

export const Table = memo(TableImpl);
