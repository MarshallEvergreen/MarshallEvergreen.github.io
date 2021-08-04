import * as React from "react"
import {Center, ChakraProvider, Collapse, Fade, Flex, ScaleFade, useColorModeValue} from "@chakra-ui/react"
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {useEffect, useState} from "react";

const Page = ({children}) => {
    const [scrollDir, setScrollDir] = useState("scrolling up");
    useEffect(() => {
        const threshold = 75;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        console.log(scrollDir);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
    return <Flex minH={'98vh'} flexDirection={'column'}>
        <ChakraProvider>
            <Collapse in={scrollDir === 'scrolling up'}>
                <Navbar/>
            </Collapse>
            <Center
                paddingTop={{base: '100px', lg: '60px'}}
                flexGrow={1}
                bg={useColorModeValue('purple.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                {children}
            </Center>
            <Footer/>
        </ChakraProvider>
    </Flex>
}

export default Page
