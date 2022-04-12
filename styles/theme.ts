import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: "Roboto, Arial, sans-serif",
        body: "Roboto, Arial, sans-serif"
    },

    styles: {
        global: {
            html: {
                height: "100%"
            },
            body: {
                height: "100%",
                background: "gray.900",
                color: "gray.200"
            }
        }
    }
})

export { theme }