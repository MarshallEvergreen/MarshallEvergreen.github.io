import * as React from "react"
import {Center, ChakraProvider, Flex, Stack, useColorModeValue} from "@chakra-ui/react"
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Page = ({children}) => {
    return <Flex minH={'98vh'} flexDirection={'column'}>
        <ChakraProvider>
            <Navbar/>
            <Center flexGrow={1}
                bg={useColorModeValue('purple.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                {children}
            </Center>
            <Footer/>
        </ChakraProvider>
    </Flex>
}

export default Page
