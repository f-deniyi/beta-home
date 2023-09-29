import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'

export default function PaginationRounded({ count }) {
    return (
        <Stack spacing={2}>
            <Pagination count={count} variant="outlined" shape="rounded"
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: BiSolidLeftArrow, next: BiSolidRightArrow }}
                        {...item}
                        style={{
                            backgroundColor: item.selected ? '#FFF112' : 'transparent', 
                            border: 'none'
                        }}
                    />
                )}
            />
        </Stack>
    );
}
