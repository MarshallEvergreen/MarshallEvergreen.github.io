import {Center, Container, useColorMode} from "@chakra-ui/react";
import * as React from "react";
import constellationDark from "../images/Endless-Constellation-Dark.svg"
import constellationLight from "../images/Endless-Constellation-Light.svg"

export default function PageContent({children}) {

    const {colorMode} = useColorMode()

    return (
        <Center
            bgImage={colorMode === "light" ? constellationLight : constellationDark}
            flexGrow={1}>
            <Container
                marginY={{base: '50px', md: '100px', lg: '150px'}}
                maxW={'7xl'}>
                {children}
            </Container>
        </Center>
    )
}