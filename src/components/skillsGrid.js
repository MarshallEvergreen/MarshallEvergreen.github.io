import * as React from "react"
import {Box, HStack, SimpleGrid, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import SkillIcon from "./skillIcon";
import CustomHeader from "./heading";
import MyColours from "../theme/myColors";
import HeaderSizes from "../theme/headerSizes";

export default function SkillsGrid() {
    const lineColor = useColorModeValue(MyColours.NavigationNumber[0], MyColours.NavigationNumber[1])
    const headerColor = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])

    const Line = () =>
        <Box
            transition={'0.3s'}
            top={'-5px'}
            maxW={{base: '75px', md: '200px', lg: '400px'}}
            flexGrow={1}
            height={'1px'}
            background={headerColor}
        />

    const SkillGrid = ({children, heading}) => (
        <Stack marginBottom={'50px'}>
            <HStack
                marginBottom={'30px'}>
                <Line/>
                <CustomHeader>
                    <Text
                        as={'span'}
                        color={lineColor}
                        fontSize={HeaderSizes.xsmall}>
                        {' ' + heading}
                    </Text>
                </CustomHeader>
            </HStack>
            <SimpleGrid
                justifyContent={'center'}
                columns={6}
                spacing={3}>
                {children}
            </SimpleGrid>
        </Stack>
    )

    return (
        <SimpleGrid columns={1}>
            <SkillGrid
                heading={'Some of my favourite tech to work with is:'}>
                <SkillIcon icon={'cplusplus-plain'}/>
                <SkillIcon icon={'python-plain-wordmark'}/>
                <SkillIcon icon={'jupyter-plain-wordmark'}/>
                <SkillIcon icon={'lua-plain-wordmark'}/>
                <SkillIcon icon={'docker-plain-wordmark'}/>
                <SkillIcon icon={'react-plain-wordmark'}/>
            </SkillGrid>
            <SkillGrid
                heading={"I've worked with a few other things as well:"}>
                <SkillIcon icon={'csharp-plain'}/>
                <SkillIcon icon={'matlab-plain'}/>
                <SkillIcon icon={'javascript-plain'}/>
                <SkillIcon icon={'typescript-plain'}/>
                <SkillIcon icon={'mongodb-plain-wordmark'}/>
                <SkillIcon icon={'angularjs-plain'}/>
                <SkillIcon icon={'rust-plain'}/>
                <SkillIcon icon={'go-plain'}/>
                <SkillIcon icon={'cucumber-plain'}/>
                <SkillIcon icon={'gradle-plain'}/>
                <SkillIcon icon={'kotlin-plain'}/>
            </SkillGrid>
            <SkillGrid
                heading={"Tools I've used to build stuff include:"}>
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

        </SimpleGrid>
    )
}