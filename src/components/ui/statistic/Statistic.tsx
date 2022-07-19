import * as React from 'react';
import {FC, ReactElement} from "react";
import {getStatistic} from "../../../redux/components/contacts/contacts-selectors";
import {useSelector} from "react-redux";
import {Box, Typography} from '@mui/material';
import {TileContainer} from "../contacts-view/contacts-table/TableStyled";
import styled from "styled-components";
import {StatisticBlock} from "./StatisticBlock";

type StatisticProps = {};
export const Statistic: FC<StatisticProps> = (): ReactElement => {
    const {
        collectionsize,
        males,
        females,
        indeterminate,
        nationals
    } = useSelector(getStatistic)
    return (
        <StatisticWrapper>
            <Box fontSize={'16px'} fontWeight={700} marginBottom={'16px'}>Statistic</Box>
            <Box display={'flex'} marginBottom={'16px'} position={'relative'}>
                <StatisticBlock title={'Collection size'} name={collectionsize}/>
                <StatisticBlock title={'Males'} name={males}/>
                <StatisticBlock title={'females'} name={females}/>
                <StatisticBlock title={'Inderminate'} name={indeterminate}/>
            </Box>
            <Box bgcolor={'#FFE58F'} position={'absolute'} left={'211px'}>
                {males - females > 0 ? "Men predominate" : "Women predominate"}
            </Box>
            <Box>
                <Typography variant={'h5'} component={'span'}>Nationals</Typography>
                <Box display={'flex'} flexWrap={'wrap'}>
                    {Object.entries(nationals).map(([key,value])=><Box fontSize={'25px'} display={'flex'} marginRight={'16px'} key={key}>
                        <Box display={'flex'}>{`${key} - ${value}`}</Box>
                    </Box>)}
                </Box>
            </Box>
        </StatisticWrapper>
    );
};


export const StatisticWrapper = styled(TileContainer)`
  display: flex;
  flex-direction: column;
  margin-top:16px;
  border-radius:10px;
`;



