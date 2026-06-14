import { Center, SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from "react";
import ProjectInfo from "../information/projectInfo";
import ProjectCard from "../projectCard";
import SectionHeader from "../sectionHeader";

export default function Projects() {
    return (
        <Center
            minH={'75vh'}
            id={'Projects'}
        >
            <Stack
                minW={{ base: '0', md: '800px' }}
                spacing={8}
                py={8}
            >
                <SectionHeader number={'04.'} title={"Things I've built"} />
                <SimpleGrid
                    columns={1}
                    spacing={6}
                    maxW={'700px'}
                >
                    {ProjectInfo.map((info, i) => (
                        <ProjectCard key={i} info={info} />
                    ))}
                </SimpleGrid>
            </Stack>
        </Center>
    );
}
