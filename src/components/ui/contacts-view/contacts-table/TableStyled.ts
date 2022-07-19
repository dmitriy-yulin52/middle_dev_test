import styled from "styled-components";
import {UserNation} from "./ContactsTableStyles";

export const ContainerStyle = styled.div`
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
`;
export const TileListContainer = styled(ContainerStyle)`
  margin: 10px 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1660px) {
    grid-template-columns: repeat(2, 2fr);
    };
    @media (max-width: 1250px) {
    grid-template-columns: repeat(1, 1fr);
    };
`;

export const TileContainer = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: 1px 1px 2px 1px rgb(0 0 0 / 20%);
`;

export const TileImageWrapper = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  overflow: hidden;
  min-height: 12.8rem;
  min-width: 12.8rem;
  max-width: 12.8rem;
  max-height: 12.8rem;
  margin-right: 1rem;
`;

export const TileImage = styled.img`
  display: flex;
`;

export const TileInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

export const UserNationTile = styled(UserNation)`
  position: absolute;
  font-size: 1rem;
  padding: 0.1rem 0.5rem;
  top: 0;
  right: 0;
  opacity: 0.8;
`;
