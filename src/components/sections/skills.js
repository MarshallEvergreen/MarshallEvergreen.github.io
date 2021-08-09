import * as React from "react";
import SectionHeader from "../sectionHeader";
import {Stack} from "@chakra-ui/react";
import SkillsGrid from "../skillsGrid";

export default function Skills() {
    return (
        <Stack
            id={'Skills'}
            minH={'100vh'}>
            <SectionHeader number={'04.'} title={'Skills'}/>
            <Stack
                spacing={10}>
                <SkillsGrid/>
            </Stack>
        </Stack>
    )
}