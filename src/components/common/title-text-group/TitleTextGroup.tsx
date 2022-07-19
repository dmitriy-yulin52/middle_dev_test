import * as React from 'react';
import {ReactElement, ReactNode} from "react";
import styled from "styled-components";


export interface TileTextGroupProps {
  title: string;
  children:ReactNode
}

export const TileTextGroup: React.FC<TileTextGroupProps> = ({ title, children }):ReactElement => {
  return (
    <TextGroupWrapper>
      <TextGroupTitle>{`${title}\u00A0:`}</TextGroupTitle>
      {children}
    </TextGroupWrapper>
  );
};

export const TextGroupWrapper = styled.div`
  display: flex;
  font-size: 1.1rem;
  align-items: center;
`;

export const TextGroupTitle = styled.p`
  font-weight: 700;
  margin-right: 5px;
`;
