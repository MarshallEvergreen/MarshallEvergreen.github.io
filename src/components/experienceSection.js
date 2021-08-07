import * as React from "react"
import {
    Center,
    Image,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useBreakpointValue,
    useColorMode
} from '@chakra-ui/react';
import SectionHeader from "./sectionHeader";
import ExperienceCard from "./experienceCard";

export default function ExperienceSection({number, title, sectionId, injectedInfo}) {
    const orientation = useBreakpointValue({base: 'horizontal', md: 'vertical'})
    const {colorMode} = useColorMode()

    return (
        <Center
            paddingTop={{base: '50px', md: '100px'}}
            paddingBottom={'4px'}
            id={sectionId}
        >
            <Stack
                minW={{base: '0', md: '720px'}}
            >
                <SectionHeader number={number} title={title}/>
                <Tabs
                    orientation={orientation}
                    colorScheme={colorMode === "light" ? 'purple' : 'green'}>
                    <TabList>
                        {injectedInfo.map((info) => (
                            <Tab>{info['title']}</Tab>
                        ))}
                    </TabList>

                    <TabPanels>
                        {injectedInfo.map((info) => (
                            <TabPanel>
                                <ExperienceCard
                                    title={info.title}
                                    dates={info.dates}
                                    description={info.description}
                                    image={<Image src={info.image}/>}
                                />
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Stack>
        </Center>
    );
}
