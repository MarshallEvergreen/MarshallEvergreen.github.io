import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import WithSubnavigation from "../components/navbar";

const Dashboard = () => {
    return <div>
        <ChakraProvider>
            <WithSubnavigation/>
        </ChakraProvider>
    </div>
}

export default Dashboard
