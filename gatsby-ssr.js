import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import theme from "./src/theme/theme"

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
        <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            key="chakra-ui-no-flash"
            storageKey="chakra-ui-color-mode"
        />,
    ])
}
