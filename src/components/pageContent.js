import {Center, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";
import MyColours from "../theme/myColors";
import constellationDark from "../images/Endless-Constellation-Dark.svg"
import constellationLight from "../images/Endless-Constellation-Light.svg"

export default function PageContent({children}) {

    const background = useColorModeValue(MyColours.PageBackground[0], MyColours.PageBackground[1])

    return (
        <Center
            bg={background}
            paddingTop={{base: '100px', lg: '60px'}}
            flexGrow={1}>
            {children}
        </Center>
    )
}