import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import SocialProfileWithImage from "../components/myCard";
import WithSubnavigation from "../components/navbar";
import ProductSimple from "../components/myCard";

const IndexPage = () => {
    return <div>
        <ChakraProvider>
            <WithSubnavigation/>
            <ProductSimple/>
        </ChakraProvider>
    </div>
}

export default IndexPage
