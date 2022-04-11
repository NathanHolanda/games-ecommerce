import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: "Roboto",
        body: "Roboto"
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