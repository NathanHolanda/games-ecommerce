import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { usePagination } from "../../../../contexts/pagination";
import { Button } from "./Button";
import { CurrentPageSiblings } from "./CurrentPageSiblings";

interface PaginationProps{
    currentPage?: number
    itemsPerPage?: number
    totalItems: number
}

function Pagination({
    currentPage = 1,
    itemsPerPage = 4,
    totalItems
}: PaginationProps) {

    const {onPageChange} = usePagination()
    
    const siblings = 2
    const lastPage = Math.ceil(totalItems / itemsPerPage)

    if(currentPage < 0) currentPage = 1
    if(currentPage > lastPage) currentPage = lastPage

    const lastItem = itemsPerPage * currentPage
    const lastPageItem = lastItem > totalItems ? totalItems : lastItem

    const firstItem = lastPageItem - itemsPerPage + 1
    const betweenFirstAndLast = itemsPerPage - (lastItem - lastPageItem + 1)
    const firstPageItem = lastItem > totalItems ? (lastPageItem - betweenFirstAndLast) : firstItem

    return (
        <Stack
          align="center"
          justify='space-between'
          spacing='2'
        >
            <HStack spacing={["1", "1", "2"]}>
                { currentPage > 1 && <Button number={1} onPageChange={onPageChange} /> }

                { currentPage > 2 && <CurrentPageSiblings type="left" currentPage={currentPage} quantity={siblings} /> }

                <Button isCurrent number={currentPage} />

                { currentPage < lastPage - 1 && <CurrentPageSiblings type="right" currentPage={currentPage} quantity={siblings} lastPage={lastPage} /> }

                { currentPage < lastPage && <Button number={lastPage} onPageChange={onPageChange} /> }
            </HStack>
            <Box fontSize={["xs", "xs", "sm"]}>
                <Text>{firstPageItem} à {lastPageItem} de {totalItems} resultados</Text>
            </Box>
        </Stack>
    );
}

export { Pagination }