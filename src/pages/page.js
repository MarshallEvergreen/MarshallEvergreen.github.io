import * as React from "react"
import {Box, ChakraProvider, useColorModeValue} from "@chakra-ui/react"
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Page = ({children}) => {
    return <div>
        <ChakraProvider>
            <Navbar/>
            <Box
                bg={useColorModeValue('purple.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                {children}
            </Box>
            <Footer/>
        </ChakraProvider>
    </div>
}

export default Page
