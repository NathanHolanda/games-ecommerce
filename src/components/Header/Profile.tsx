import { Avatar, Box, Text } from "@chakra-ui/react";


function Profile(){
    return (
        <>
            <Box mr="3">
                <Text fontSize="md">Nathan Holanda</Text>
                <Text
                    color="gray.500"
                    fontSize="sm"
                >
                    nathan.hl.contato@gmail.com
                </Text>
            </Box>
            <Avatar
                name="Nathan Holanda"
                src="https://github.com/nathanholanda.png"
            />
        </>
    )
}

export { Profile }