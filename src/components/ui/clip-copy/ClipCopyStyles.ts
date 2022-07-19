import styled, {keyframes} from "styled-components";
import {IconButton, Link} from "@mui/material";

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

export const ClipWrapper = styled.div<ClipWrapperProps>`
  display: flex;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  align-items:center;
`;

export const SuccessMessage = styled.p`
  position: absolute;
  top:27px;
  animation: ${opacityInAnim} 0.5s ease;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.1rem;
  z-index:100;
`;

export const ContentLink = styled(Link)`
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  text-decoration:none;
`;

export const ButtonCopy = styled(IconButton)`
  color:${({theme})=>theme.colors.links};
  position:relative;
`
