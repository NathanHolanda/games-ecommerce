import { Flex, Icon, Input, FormLabel as Label } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BiSearchAlt2 } from "react-icons/bi"
import { useSearch } from '../../contexts/useSearch';

function SearchBox(){
    const { searched, handleSearchedChange } = useSearch()
    const router = useRouter()

    useEffect(() => {
        if(router.asPath !== "/busca")
            handleSearchedChange("")
    }, [router])

    return (
        <Flex align="center">
            <Input
                id="search-box"
                placeholder="Buscar por um produto..."
                fontSize="lg"
                variant="flushed"
                focusBorderColor="yellow.400"
                borderColor="transparent"
                autoFocus={router.asPath === "/busca"}
                pl="2"
                width={300}
                value={searched}
                onChange={event => handleSearchedChange(event.target.value.trim())}
                onClick={() => router.push("/busca")}
                autoComplete="off"
            />
            <Label htmlFor="search-box" cursor="pointer" mt="3">
                <Icon as={BiSearchAlt2} fontSize="xl" color="yellow.400"/>
            </Label>
        </Flex>
    )
}

export { SearchBox }