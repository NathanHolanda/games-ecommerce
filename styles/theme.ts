import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: "Roboto, Arial, sans-serif",
        body: "Roboto, Arial, sans-serif"
    },

    input:{
        focusBorderColor: "yellow",
    },

    button:{
        focusBorderColor: "yellow",
    },

    styles: {
        global: {
            body: {
                background: "gray.900",
                color: "gray.200"
            }
        }
    }
})

export { theme }