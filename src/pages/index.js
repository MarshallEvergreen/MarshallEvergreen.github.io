import * as React from "react"
import {Box, ChakraProvider, SimpleGrid, useColorModeValue} from "@chakra-ui/react"
import MyCard from "../components/myCard";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutMeCard from "../components/aboutMeCard";

const IndexPage = () => {
    return <div>
        <ChakraProvider>
            <Navbar/>
            <Box
                bg={useColorModeValue('purple.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <MyCard/>
                    <AboutMeCard/>
                </SimpleGrid>
            </Box>
            <Footer/>
        </ChakraProvider>
    </div>
}

export default IndexPage
