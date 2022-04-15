import {extendTheme} from '@chakra-ui/react'

const focusBorderColor = {
    baseStyle: {
        _focus: {
            boxShadow: "0 0 0 3px #975A16"
        }
    }
}

const theme = extendTheme({
    fonts: {
        heading: "Roboto, Arial, sans-serif",
        body: "Roboto, Arial, sans-serif",
        input: "Roboto, Arial, sans-serif"
    },

    styles: {
        global: {
            body: {
                background: "gray.900",
                color: "gray.200"
            }
        }
    },
    
    components: {
        Link: focusBorderColor,
        Button: focusBorderColor,
        ModalCloseButton: focusBorderColor,
        IconButton: focusBorderColor,
        Input: focusBorderColor
    }
})

export { theme }