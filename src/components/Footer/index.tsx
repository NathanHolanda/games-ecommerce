import { Box, Icon, Text } from "@chakra-ui/react"
import {AiOutlineLinkedin} from "react-icons/ai"

function Footer(){
    return (
        <Box
          as="footer"
          position="absolute"
          bottom={0}
          w="100%"
          p="4"
          mt="8"
          maxWidth={1200}
          textAlign="center"
          borderTop="1px solid"
          borderColor="blue.600"
        >
            <Text fontSize="md" fontWeight="500">
                Jogador Karo &copy; { new Date().getFullYear() }
            </Text>
            <Text fontSize="xs" color="gray.500">
                Made by Nathan Holanda
            </Text>
            <a target="_blank" href="https://linkedin.com/in/nathan-holanda-182a5916b" aria-label="Meu LinkedIn" title="Meu LinkedIn">
                <Icon
                    as={AiOutlineLinkedin}
                    color="blue.500"
                    fontSize="xl"
                /> 
            </a>
        </Box>
    )
}

export { Footer }