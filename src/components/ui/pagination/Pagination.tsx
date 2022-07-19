import * as React from 'react';
import {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import {useAction} from "../../../utils/hooks/hooks-utils";
import {ContactsActions} from "../../../redux/components/contacts/contacts-actions";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import {Box} from "@mui/material";

type PaginationProps = {};
export const Pagination: FC<PaginationProps> = (props): ReactElement => {

    const [currPage, setCurrPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    const setCurrentPage = useAction(ContactsActions.setCurrentPage)

    useEffect(() => {
        setCurrentPage(currPage)
        setPageCount(Math.ceil(50 / 9))
    }, [currPage])


    const handleClick = useCallback((data: {selected:number}) => {
        const curPage = data.selected + 1
        setCurrPage(curPage)
    },[setCurrPage])

    return (
        <Box display={'flex'} justifyContent={'flex-end'} marginTop={'16px'}>
            <PaginationComponent
                previousLabel="<"
                nextLabel=">"
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handleClick}
                renderOnZeroPageCount={null as any}
            />
        </Box>
    );
};


const PaginationComponent = styled(ReactPaginate)`
.selected{
    border:1px solid #1976d2;
    background-color:#1976d2;
    a{
    color: white;
    }
}
.disabled{
    background-color:#1976d2;
}
li{
display:inline-flex;
justify-content:center;
align-items:center;
margin:5px;
border-radius:100%;
a{
text-align:center;
width:40px;
height:40px;
border:1px solid #1976d2;
border-radius:100%;
cursor:pointer;
line-height:39px;
color:#1976d2;
    }
}
`

