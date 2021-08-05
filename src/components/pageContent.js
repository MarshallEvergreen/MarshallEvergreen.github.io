import {Center, useColorMode} from "@chakra-ui/react";
import * as React from "react";
import constellationDark from "../images/Endless-Constellation-Dark.svg"
import constellationLight from "../images/Endless-Constellation-Light.svg"

export default function PageContent({children}) {

    const { colorMode } = useColorMode()

    return (
        <Center
            bgImage={colorMode === "light" ? constellationLight : constellationDark}
            paddingTop={{base: '100px', lg: '60px'}}
            flexGrow={1}>
            {children}
        </Center>
    )
}