import { Flex, Icon, Input, FormLabel as Label } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi"
import { api } from '../../services/api';

function SearchBox(){
    const [ searched, setSearched ] = useState<string>("")
    const [ searchBoxCleaned, setSearchBoxCleaned ] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        if(searched !== ""){
            api.get(`/products/search?name=${searched}`)
                .then(result => console.log(result.data))
        }else{
            if(searchBoxCleaned){
                setSearchBoxCleaned(false)
                router.push("/")
            }
        }
    }, [searched])

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
                value={searched}
                onChange={event => setSearched(event.target.value.trim())}
                onKeyDown={event => {
                    if(event.key === "Backspace" || event.key === "Delete" || event.key === "Space"){
                        searched === "" && setSearchBoxCleaned(true)
                    }
                }}
                autoComplete="off"
            />
            <Label htmlFor="search-box" cursor="pointer" mt="3">
                <Icon as={BiSearchAlt2} fontSize="xl" color="yellow.400"/>
            </Label>
        </Flex>
    )
}

export { SearchBox }