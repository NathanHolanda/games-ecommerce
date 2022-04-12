import { Box, Link, Text, textDecoration } from "@chakra-ui/react"
import { Layout } from "../components/Layout"

function Home(){
  return (
    <Layout>
      <Box textAlign="center" mt="12">
        <Box fontSize="xl">
          <Text>Seja bem-vindo(a) à loja online da Jogador Karo! <Text as="span" fontSize="4xl">🎮</Text></Text>
          <Text mt="2">Aqui você pode encontrar os melhores jogos  eletrônicos pelos melhores preços.</Text>
        </Box>
        <Link _hover={{textDecoration: "none"}}>
          <Text
            mt="4"
            fontFamily="'Press Start 2P', cursive"
            fontSize="4xl"
            transition= "0.3s"
            _hover={{
              color: "yellow.300",
            }}
          >
            Press Start
          </Text>
        </Link>
        
      </Box>
    </Layout>
  )
}

export default Home
