import copy from "copy-to-clipboard";
import React, {memo, ReactElement, useCallback, useState} from "react";
import {
    ClipButton,
    ClipCopyContentLink,
    ClipCopyContentText,
    ClipImage,
    ClipWrapper,
    SuccessMessage,
} from "./ClipCopyStyles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton} from "@mui/material";

export interface ClipCopyProp {
    href?: string;
    alignCenter?: boolean;
    children: string
}

export const ClipCopy: React.FC<ClipCopyProp> = memo(({children, href, alignCenter}): ReactElement => {
    const [successCopy, setSuccessCopy] = useState(false);

    const copyToClip = useCallback(() => {
        if (typeof children === "string") {
            const status = copy(children);
            setSuccessCopy(status);
            setTimeout(() => {
                setSuccessCopy(false);
            }, 9);
        }
    }, [setSuccessCopy]);

    return (
        <ClipWrapper alignCenter={alignCenter}>
            <IconButton style={{color: '#2aa2ff',position:'relative'}} onClick={copyToClip}>
                <ContentCopyIcon/>
                {successCopy && <SuccessMessage>Скопировано!</SuccessMessage>}
            </IconButton>

            {href ? (
                <ClipCopyContentLink href={href}>{children}</ClipCopyContentLink>
            ) : (
                <ClipCopyContentText>{children}</ClipCopyContentText>
            )}
        </ClipWrapper>
    );
});

