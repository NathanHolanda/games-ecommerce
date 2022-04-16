import { Avatar, Box, Button, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs"
import { useSession, signIn, signOut } from "next-auth/react"
import { BiLogOutCircle } from "react-icons/bi";


function Profile(){
    const { data: session } = useSession()
    
    return session?.user ? (
        <Flex>
            <Box mr="2">
                <Text fontSize="md" fontWeight="500">
                    { session.user.name }
                    <IconButton
                        fontSize="lg"
                        icon={<BiLogOutCircle/>}
                        aria-label="Sair"
                        colorScheme="transparent"
                        p="0"
                        h="5"
                        mb="0"
                        onClick={() => signOut()}
                    />
                </Text>
                
                <Text
                    color="gray.500"
                    fontSize="sm"
                >
                    { session.user.email }
                </Text>
            </Box>
            <Avatar
                name={ session.user.name || "" }
                title={ session.user.name || "" }
                src={ session.user.image || "" }
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
            onClick={() => signIn("github")}
        >
            <Box mr="2">
                <Text fontSize="lg">Faça login com o GitHub</Text>
            </Box>
            <Icon fontSize="3xl" as={BsGithub} />
        </Button>
    )
}

export { Profile }