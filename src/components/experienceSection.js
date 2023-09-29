import {
    Center,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import * as React from "react";
import MyColours from "../theme/myColors";
import ExperienceCard from "./experienceCard";
import SectionHeader from "./sectionHeader";

export default function ExperienceSection({ number, title, sectionId, injectedInfo }) {
    const colorScheme = useColorModeValue(MyColours.colorScheme[0], MyColours.colorScheme[1])
    const orientation = useBreakpointValue({ base: 'horizontal', md: 'vertical' })

    return (
        <Center
            minH={'75vh'}
            id={sectionId}
        >
            <Stack
                minW={{ base: '0', md: '800px' }}
                minH={'750px'}
            >
                <SectionHeader number={number} title={title} />
                <Tabs
                    orientation={orientation}
                    colorScheme={colorScheme}>
                    <div style={{ overflowX: 'auto' }}>
                        <TabList>
                            {injectedInfo.map((info) => (
                                <Tab>{info['tabName']}</Tab>
                            ))}
                        </TabList>
                    </div>

                    <TabPanels>
                        {injectedInfo.map((info) => (
                            <TabPanel>
                                <Center
                                    py={6}>
                                    <ExperienceCard info={info} />
                                </Center>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Stack>
        </Center >
    );
}
