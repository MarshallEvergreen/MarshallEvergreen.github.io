import { SimpleGrid, Stack } from "@chakra-ui/react";
import * as React from "react";
import AboutMeCard from "../aboutMeCard";
import MyCard from "../myCard";
import SectionHeader from "../sectionHeader";
import SkillsGrid from "../skillsGrid";

export default function AboutMe() {
    return (
        <Stack
            id={'About'}
            minH={'100vh'}>
            <SectionHeader number={'01.'} title={'About me'} />
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                <MyCard />
                <AboutMeCard />
            </SimpleGrid>
            <SkillsGrid />
        </Stack>
    )
}