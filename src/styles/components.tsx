import type { ComponentStyleConfig } from "@chakra-ui/theme"

export const Button: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: "lg",
    },
    sizes: {
        sm: {
            fontSize: "sm",
            px: 4,
            py: 3,
        },
        md: {
            fontSize: "md",
            px: 6,
            py: 4,
        },
    },
    variants: {
        primary: {
            bg: "primary",
            color: "secondary",
            _hover: { bg: "secondary", color: "primary" },
        },
        secondary: {
            bg: "secondary",
            color: "primary",
            _hover: { bg: "primary", color: "secondary" },
        },
        accent: {
            bg: "accent",
            color: "white",
        },
    },

    defaultProps: {
        size: "md",
        variant: "primary",
    },
}