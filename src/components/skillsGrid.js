import * as React from "react"
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    SimpleGrid,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import MyColours from "../theme/myColors";
import HeaderSizes from "../theme/headerSizes";
import SkillIcon from "./skillIcon";
import CustomHeader from "./heading";

export default function SkillsGrid() {
    const headerColor = useColorModeValue(MyColours.Header[0], MyColours.Header[1])

    const SkillGrid = ({children, heading}) => (
        <AccordionItem>
            <CustomHeader>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Text
                            as={'span'}
                            color={headerColor}
                            fontSize={HeaderSizes.xsmall}>
                            {heading}
                        </Text>
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </CustomHeader>
            <AccordionPanel pb={4}>
                <SimpleGrid
                    justifyContent={'center'}
                    columns={{base: 3, md: 6}}
                    spacing={3}>
                    {children}
                </SimpleGrid>
            </AccordionPanel>
        </AccordionItem>
    )

    return (
        <Accordion
            padding={10}
            defaultIndex={[0]}
            allowMultiple>
            <SkillGrid
                heading={'Some of my favourite tech to work with is...'}>
                <SkillIcon icon={'cplusplus-plain'}/>
                <SkillIcon icon={'python-plain-wordmark'}/>
                <SkillIcon icon={'jupyter-plain-wordmark'}/>
                <SkillIcon icon={'lua-plain-wordmark'}/>
                <SkillIcon icon={'docker-plain-wordmark'}/>
                <SkillIcon icon={'react-plain-wordmark'}/>
            </SkillGrid>
            <SkillGrid
                heading={"I've worked with a few other things as well..."}>
                <SkillIcon icon={'csharp-plain'}/>
                <SkillIcon icon={'matlab-plain'}/>
                <SkillIcon icon={'javascript-plain'}/>
                <SkillIcon icon={'typescript-plain'}/>
                <SkillIcon icon={'mongodb-plain-wordmark'}/>
                <SkillIcon icon={'angularjs-plain'}/>
                <SkillIcon icon={'rust-plain'}/>
                <SkillIcon icon={'cucumber-plain'}/>
                <SkillIcon icon={'gradle-plain'}/>
            </SkillGrid>
            <SkillGrid
                heading={'Tools I\'ve used to build stuff include...'}>
                <SkillIcon icon={'git-plain-wordmark'}/>
                <SkillIcon icon={'bitbucket-plain-wordmark'}/>
                <SkillIcon icon={'github-plain'}/>
                <SkillIcon icon={'jetbrains-plain'}/>
                <SkillIcon icon={'visualstudio-plain'}/>
                <SkillIcon icon={'vscode-plain'}/>
                <SkillIcon icon={'linux-plain'}/>
                <SkillIcon icon={'ubuntu-plain'}/>
                <SkillIcon icon={'windows8-plain'}/>
            </SkillGrid>
        </Accordion>
    )

}