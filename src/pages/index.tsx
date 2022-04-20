import { Box, Link as ChakraLink, Text, Flex } from "@chakra-ui/react"
import Link from "next/link"
import Head from "next/head"
import { Layout } from "../components/Layout"
import { useEffect } from "react"
import { api } from "../services/api"

function Home(){
  useEffect(() => {
    api.get("/products")
    .then(response => response.data)
    .then(products => console.log(products))
  })

  return (
    <>
      <Head>
        <title>Jogador Karo | Home</title>
      </Head>
      <Layout>
        <Flex
          h={600}
          direction="column"
          justify="center"
          as="main"
          mb="4"
          textAlign="center"
        >
          <Box fontSize="xl">
            <Text>Seja bem-vindo(a) à loja online da Jogador Karo! <Text as="span" fontSize="4xl">🎮</Text></Text>
            <Text mt="2">Aqui você pode encontrar os melhores jogos  eletrônicos pelos menores preços.</Text>
          </Box>

          <Link href="/produtos" passHref>
            <ChakraLink _hover={{textDecoration: "none"}}>
              <Text
                mt="4"
                fontFamily="'Press Start 2P', cursive"
                fontSize="4xl"
                transition= "0.2s"
                _hover={{
                  color: "yellow.300",
                }}
              >
                Press Start
              </Text>
            </ChakraLink>
          </Link>
        </Flex>
      </Layout>
    </>
  )
}

export default Home