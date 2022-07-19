import styled from "styled-components";
import { ReactComponent as CopyImg } from "../../../assets/images/copy.svg";
import { keyframes } from "styled-components";

export const opacityInAnim = keyframes` 
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


interface ClipWrapperProps {
  alignCenter?: boolean;
}

interface ClipButtonProps {
  alignCenter?: boolean;
}

export const ClipWrapper = styled.div<ClipWrapperProps>`
  display: flex;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  align-items: ${({ alignCenter }) => (alignCenter ? "center" : "flex-start")};
`;

export const ClipImage = styled(CopyImg)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${({ theme }) => theme.colors.links};
  opacity: 0.7;
  transition: opacity 0.3s ease;
`;

export const ClipButton = styled.button<ClipButtonProps>`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  margin-top: 2px;

  ${({ alignCenter }) =>
    alignCenter
    && `
    display: flex;
    margin-top: 1px;
    justify-content: center;
    align-items: center;
  `}

  :focus {
    outline: none;
  }

  :hover ${ClipImage} {
    opacity: 1;
  }

  :focus ${ClipImage} {
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.links};
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  animation: ${opacityInAnim} 0.5s ease;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.1rem;
  z-index:100;
`;

export const ClipCopyContentText = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const ClipCopyContentLink = styled.a`
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;
