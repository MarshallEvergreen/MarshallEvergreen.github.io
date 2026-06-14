import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import theme from "../theme/theme";
import Footer from "./footer";
import Navbar from "./navbar";

import Head from "./head";
import PageContent from "./pageContent";

const Layout = ({ children }) => {
    const [visible, setVisible] = useState(true);
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
            setVisible(scrollY <= lastScrollY);
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
    }, []);

    return (
        <>
            <Head />
            <ChakraProvider theme={theme}>
                <Navbar visible={visible} />
                <PageContent children={children} />
                <Footer />
            </ChakraProvider>
        </>
    )
}

export default Layout
