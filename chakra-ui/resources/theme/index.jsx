import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
};

const Button = {
  variant: {
    outline: {
      borderRadius: "0",
      textTransform: "uppercase",
      fontWeight: "light",
      letterSpacing: "1px",
      _hover: {
        color: "black",
      },
    },
  },
};

const Heading = {
  variants: {
    banner: {
      textTransform: "uppercase",
      fontWeight: "light",
      letterSpacing: "5px",
      color: "white",
      textAlign: "center"
    },
  },
};
export const theme = extendTheme({ fonts, components: { Button, Heading } });
