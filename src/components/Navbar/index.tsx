import { Flex } from "@chakra-ui/react";
import { BiHome, BiGame, BiHistory } from "react-icons/bi"
import { NavbarLink } from "./Link";

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
            <NavbarLink icon={BiHome} link="/" text="Home" isCurrent/>
            <NavbarLink icon={BiGame} link="/produtos" text="Produtos"/>
            <NavbarLink icon={BiHistory} link="/historico" text="Histórico"/>
        </Flex>
    )
}

export { Navbar }