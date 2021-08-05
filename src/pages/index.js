import * as React from "react"
import {SimpleGrid, Stack} from "@chakra-ui/react"
import MyCard from "../components/myCard";
import AboutMeCard from "../components/aboutMeCard";
import Page from "./page";
import WorkSection from "../components/workSection";
import EducationSection from "../components/educationSection";
const Index = () => {
    return <Page>
        <Stack minH={'100vh'}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                <MyCard/>
                <AboutMeCard/>
            </SimpleGrid>
            <EducationSection/>
            <WorkSection/>
        </Stack>
    </Page>
}

export default Index
