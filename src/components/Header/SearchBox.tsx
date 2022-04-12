import { Flex, Icon, Input, FormLabel as Label } from '@chakra-ui/react';
import { BiSearchAlt2 } from "react-icons/bi"

function SearchBox(){
    return (
        <Flex align="center">
            <Input
                id="search-box"
                placeholder="Buscar..."
                fontSize="lg"
                variant="flushed"
                focusBorderColor="yellow.400"
                borderColor="transparent"
                pl="2"
                width={300}
            />
            <Label htmlFor="search-box" cursor="pointer" mt="3">
                <Icon as={BiSearchAlt2} fontSize="xl" color="yellow.400"/>
            </Label>
        </Flex>
    )
}

export { SearchBox }