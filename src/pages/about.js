import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import WithSubnavigation from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
    return <div>
        <ChakraProvider>
            <WithSubnavigation/>
            <Footer/>
        </ChakraProvider>
    </div>
}

export default About
