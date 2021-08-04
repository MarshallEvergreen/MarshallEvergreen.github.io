import * as React from "react"
import {SimpleGrid, Stack} from "@chakra-ui/react"
import MyCard from "../components/myCard";
import AboutMeCard from "../components/aboutMeCard";
import Page from "./page";
import Work from "../components/work";
import Education from "../components/education";
const Index = () => {
    return <Page>
        <Stack>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                <MyCard/>
                <AboutMeCard/>
            </SimpleGrid>
            <Education/>
            <Work/>
        </Stack>
    </Page>
}

export default Index
