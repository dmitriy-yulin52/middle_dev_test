import * as React from 'react';
import {FC, memo, ReactElement} from "react";
import {Box, Typography} from "@mui/material";
import styled from "styled-components";

type StatisticBlockProps = {
    title:string
    name:number
};
export const StatisticBlock: FC<StatisticBlockProps> = memo(({title,name}): ReactElement => {
    return (
        <Block>
            <Typography variant={'h5'} component={'span'}>{title}</Typography>
            <Box>{name}</Box>
        </Block>
    );
});

const Block = styled(Box)`
    display:flex;
    flex-direction:column;
    margin-right:16px;
    align-items:center;
    span{
        font-weight:500;
    };
    div{
        font-weight:bold;
        font-size:25px;
    }
`