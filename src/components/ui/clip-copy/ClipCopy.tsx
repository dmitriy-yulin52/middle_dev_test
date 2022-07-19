import copy from "copy-to-clipboard";
import React, {memo, ReactElement, useCallback, useState} from "react";
import {
    ButtonCopy,
    ClipWrapper, ContentLink,
    SuccessMessage,
} from "./ClipCopyStyles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export interface ClipCopyProp {
    href?: string;
    children: string
}

export const ClipCopy: React.FC<ClipCopyProp> = memo(({children, href}): ReactElement => {
    const [successCopy, setSuccessCopy] = useState(false);

    const copyToClip = useCallback(() => {
        if (typeof children === "string") {
            const status = copy(children);
            setSuccessCopy(status);
            setTimeout(() => {
                setSuccessCopy(false);
            }, 1000);
        }
    }, [setSuccessCopy, copy]);

    return (
        <ClipWrapper>
            <ButtonCopy onClick={copyToClip}>
                <ContentCopyIcon/>
                {successCopy && <SuccessMessage>Скопировано!</SuccessMessage>}
            </ButtonCopy>
            {href ? (
                <ContentLink href={href}>{children}</ContentLink>
            ) : (
                <ContentLink
                >{children}</ContentLink>
            )}
        </ClipWrapper>
    );
});

