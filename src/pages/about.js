import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import WithSubnavigation from "../components/navbar";
import LargeWithAppLinksAndSocial from "../components/footer";

const About = () => {
    return <div>
        <ChakraProvider>
            <WithSubnavigation/>
            <LargeWithAppLinksAndSocial/>
        </ChakraProvider>
    </div>
}

export default About
