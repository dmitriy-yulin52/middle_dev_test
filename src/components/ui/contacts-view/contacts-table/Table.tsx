import * as React from 'react';
import {FC, memo, ReactElement} from 'react';
import {ContactsType} from "../../../../redux/components/contacts/contacts-types";
import {getFormatedData} from "../../../../assets/data-converter";
import {TileTextGroup} from '../../../common/title-text-group/TitleTextGroup';
import {ClipCopy} from "../../clip-copy/ClipCopy";
import {
    TileContainer,
    TileImage,
    TileImageWrapper,
    TileInfoWrapper,
    TileListContainer,
    UserNationTile
} from './TableStyled';

type TableProps = {
    contacts: ContactsType[]
};

export const TableImpl: FC<TableProps> = memo(({contacts}): ReactElement => {
    return (
        <TileListContainer>
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
                    <TileContainer key={fullName}>
                        <TileImageWrapper>
                            <TileImage src={user.picture.large} alt={fullName}/>
                        </TileImageWrapper>
                        <TileInfoWrapper>
                            <TileTextGroup title="Full name">{fullName}</TileTextGroup>
                            <TileTextGroup title="Birthday">{birthday}</TileTextGroup>
                            <TileTextGroup title="Email">
                                <ClipCopy href={`mailto:${email}`}>
                                    {email}
                                </ClipCopy>
                            </TileTextGroup>
                            <TileTextGroup title="Phone">
                                <ClipCopy href={`tel:${phone}`}>
                                    {phone}
                                </ClipCopy>
                            </TileTextGroup>
                            <TileTextGroup title="Location">
                                <ClipCopy>{location}</ClipCopy>
                            </TileTextGroup>
                            <UserNationTile color={nationalColor.color} inverted={nationalColor.inverted}>
                                {national}
                            </UserNationTile>
                        </TileInfoWrapper>
                    </TileContainer>
                )
            })}
        </TileListContainer>
    );
});


