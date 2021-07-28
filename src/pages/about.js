import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Education from "../components/education";

const About = () => {
    return <div>
        <ChakraProvider>
            <Navbar/>
            <Education/>
            <Footer/>
        </ChakraProvider>
    </div>
}

export default About
