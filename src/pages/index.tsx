import { Box, Link, Text, Flex } from "@chakra-ui/react"
import Head from "next/head"
import { Layout } from "../components/Layout"

function Home(){
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
          textAlign="center"
        >
          <Box fontSize="xl">
            <Text>Seja bem-vindo(a) à loja online da Jogador Karo! <Text as="span" fontSize="4xl">🎮</Text></Text>
            <Text mt="2">Aqui você pode encontrar os melhores jogos  eletrônicos pelos melhores preços.</Text>
          </Box>
          <Link _hover={{textDecoration: "none"}}>
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
          </Link>
        </Flex>
      </Layout>
    </>
  )
}

export default Home
