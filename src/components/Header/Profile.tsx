import { Avatar, Box, Button, Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs"
import { useSession, signIn, signOut } from "next-auth/react"
import { BiLogOutCircle } from "react-icons/bi";


function Profile(){
    const { data: session } = useSession()
    const avatarSize = useBreakpointValue({base: "sm", sm: "md"})
    
    return session?.user ? (
        <Flex>
            <Box mr="2" display={["none", "none", "none", "block"]}>
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
                mt={["1", 0]}
                size={avatarSize}
            />
            
        </Flex>
    ) : (
        <Button 
            colorScheme="transparent"
            fontWeight="400"
            border="2px solid"
            borderColor= "yellow.400"
            color= "yellow.400"
            p={[3, 5]}
            _hover={{
                borderColor: "yellow.100",
                color: "yellow.100"
            }}
            borderRadius={20}
            onClick={() => signIn("github")}
        >
            <Box mr={["0", "0", "0", "2"]}>
                <Text display={["none", "none", "none", "block"]} fontSize="lg">Faça login com o GitHub</Text>
            </Box>
            <Icon fontSize={["xl", "3xl"]} as={BsGithub} />
        </Button>
    )
}

export { Profile }