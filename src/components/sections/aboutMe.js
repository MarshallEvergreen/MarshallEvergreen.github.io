import * as React from "react";
import SectionHeader from "../sectionHeader";
import {SimpleGrid, Stack} from "@chakra-ui/react";
import MyCard from "../myCard";
import AboutMeCard from "../aboutMeCard";

export default function AboutMe() {
    return (
        <Stack
            id={'About'}
            minH={'100vh'}>
            <SectionHeader number={'01.'} title={'About me'}/>
            <SimpleGrid columns={{base: 1, lg: 2}} spacing={10}>
                <MyCard/>
                <AboutMeCard/>
            </SimpleGrid>
        </Stack>
    )
}