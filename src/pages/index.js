import * as React from "react"
import {SimpleGrid, Stack} from "@chakra-ui/react"
import MyCard from "../components/myCard";
import AboutMeCard from "../components/aboutMeCard";
import Layout from "../components/layout";
import WorkSection from "../components/workSection";
import EducationSection from "../components/educationSection";

const Index = () => {
    return (
        <Layout>
            <Stack>
                <SimpleGrid minH={'100vh'} columns={{base: 1, lg: 2}} spacing={10}>
                    <MyCard/>
                    <AboutMeCard/>
                </SimpleGrid>
                <EducationSection/>
                <WorkSection/>
            </Stack>
        </Layout>
    )
}

export default Index
