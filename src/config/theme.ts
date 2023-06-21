import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const themeConfig = extendTheme({ config });

export default themeConfig;
