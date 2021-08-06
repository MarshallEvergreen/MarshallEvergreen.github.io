import * as React from "react"
import {
    ChakraProvider,
    Collapse,
    Flex
} from "@chakra-ui/react"
import Footer from "./footer";
import Navbar from "./navbar";
import {useEffect, useState} from "react";
import theme from "../theme/theme";

import PageContent from "./pageContent";

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
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return  (
        <ChakraProvider theme={theme}>
            <Flex
                minH={'98vh'}
                flexDirection={'column'}>
                <Collapse
                    unmountOnExit={true}
                    in={scrollDir === 'scrolling up'}>
                    <Navbar/>
                </Collapse>
                <PageContent children={children}/>
                <Footer/>
            </Flex>
        </ChakraProvider>
    )
}

export default Page
