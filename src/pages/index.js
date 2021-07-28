import * as React from "react"
import {SimpleGrid} from "@chakra-ui/react"
import MyCard from "../components/myCard";
import AboutMeCard from "../components/aboutMeCard";
import Page from "./page";

const Index = () => {
    return <Page>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MyCard/>
            <AboutMeCard/>
        </SimpleGrid>
    </Page>
}

export default Index
