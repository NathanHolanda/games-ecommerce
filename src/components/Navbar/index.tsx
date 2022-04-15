import { Flex } from "@chakra-ui/react";
import { BiHome, BiGame, BiHistory, BiCart } from "react-icons/bi"
import { NavbarLink } from "./NavbarLink";

function Navbar(){
    return(
        <Flex
          as="nav"
          justify="center"
          mt="4"
          pb="4"
          borderBottom="2px solid"
          borderColor="yellow.400"
        >
            <NavbarLink icon={BiHome} link="/" text="Home"/>
            <NavbarLink icon={BiGame} link="/produtos" text="Produtos"/>
            <NavbarLink icon={BiHistory} link="/historico" text="Histórico"/>
            <NavbarLink icon={BiCart} link="/carrinho" text="Carrinho"/>
        </Flex>
    )
}

export { Navbar }