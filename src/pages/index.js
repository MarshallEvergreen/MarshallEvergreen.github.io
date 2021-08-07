import * as React from "react"
import {SimpleGrid, Stack} from "@chakra-ui/react"
import MyCard from "../components/myCard";
import AboutMeCard from "../components/aboutMeCard";
import Layout from "../components/layout";
import Work from "../components/sections/work";
import Education from "../components/sections/education";

const Index = () => {
    return (
        <Layout>
            <Stack>
                <SimpleGrid minH={'100vh'} columns={{base: 1, lg: 2}} spacing={10}>
                    <MyCard/>
                    <AboutMeCard/>
                </SimpleGrid>
                <Education/>
                <Work/>
            </Stack>
        </Layout>
    )
}

export default Index
