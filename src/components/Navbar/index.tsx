import { Flex } from "@chakra-ui/react";
import { BiGame, BiHistory } from "react-icons/bi"
import { Link } from "./Link";

function Navbar(){
    return(
        <Flex
          as="nav"
          justify="center"
          mt="4"
          pb="4"
          borderBottom="1px solid"
          borderColor="yellow.400"

        >
            <Link icon={BiGame} text="Jogos"/>
            <Link icon={BiHistory} text="Histórico"/>
        </Flex>
    )
}

export { Navbar }