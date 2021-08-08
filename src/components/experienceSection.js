import * as React from "react"
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
import SectionHeader from "./sectionHeader";
import ExperienceCard from "./experienceCard";
import MyColours from "../theme/myColors";

export default function ExperienceSection({number, title, sectionId, injectedInfo}) {
    const colorScheme = useColorModeValue(MyColours.colorScheme[0], MyColours.colorScheme[1])
    const orientation = useBreakpointValue({base: 'horizontal', md: 'vertical'})

    return (
        <Center
            minH={'75vh'}
            id={sectionId}
        >
            <Stack
                minH={'inherit'}
                minW={{base: '0', md: '720px'}}
            >
                <SectionHeader number={number} title={title}/>
                <Tabs
                    orientation={orientation}
                    colorScheme={colorScheme}>
                    <TabList>
                        {injectedInfo.map((info) => (
                            <Tab>{info['title']}</Tab>
                        ))}
                    </TabList>

                    <TabPanels>
                        {injectedInfo.map((info) => (
                            <TabPanel>
                                <ExperienceCard info={info}/>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Stack>
        </Center>
    );
}
