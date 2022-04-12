import { Avatar, Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs"


function Profile(){
    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState<boolean>(true)

    
    return isUserLoggedIn ? (
        <Flex>
            <Box mr="2">
                <Text fontSize="md" fontWeight="500">Nathan Holanda</Text>
                <Text
                    color="gray.500"
                    fontSize="sm"
                >
                    nathan.hl.contato@gmail.com
                </Text>
            </Box>
            <Avatar
                name="Nathan Holanda"
                title="Nathan Holanda"
                src="https://github.com/nathanholanda.png"
            />
        </Flex>
    ) : (
        <Button 
            colorScheme="transparent"
            fontWeight="400"
            border="2px solid"
            borderColor= "yellow.400"
            color= "yellow.400"
            py={5}
            _hover={{
                borderColor: "yellow.100",
                color: "yellow.100"
            }}
            borderRadius={20}
        >
            <Box mr="2">
                <Text fontSize="lg">Faça login com o GitHub</Text>
            </Box>
            <Icon fontSize="3xl" as={BsGithub} />
        </Button>
    )
}

export { Profile }