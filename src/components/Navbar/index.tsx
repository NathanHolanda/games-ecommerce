import { Flex } from "@chakra-ui/react";
import { BiHome, BiGame, BiHistory, BiCart } from "react-icons/bi"
import { NavbarLink } from "./NavbarLink";

function Navbar(){
    return(
        <Flex
          as="nav"
          justify="center"
          py="4"
          borderBottom="1px solid"
          borderTop="1px solid"
          borderColor="blue.600"
        >
            <NavbarLink icon={BiHome} link="/" text="Home"/>
            <NavbarLink icon={BiGame} link="/produtos" text="Produtos"/>
            <NavbarLink icon={BiCart} link="/carrinho" text="Carrinho"/>
        </Flex>
    )
}

export { Navbar }