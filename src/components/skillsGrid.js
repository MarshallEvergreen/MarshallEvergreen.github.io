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
                <SkillIcon icon={'cplusplus-plain'} link={'https://isocpp.org/'}/>
                <SkillIcon icon={'python-plain-wordmark'} link={'https://www.python.org/'}/>
                <SkillIcon icon={'jupyter-plain-wordmark'} link={'https://jupyter.org/'}/>
                <SkillIcon icon={'lua-plain-wordmark'} link={'https://www.lua.org/'}/>
                <SkillIcon icon={'docker-plain-wordmark'} link={'https://www.docker.com/'}/>
                <SkillIcon icon={'react-plain-wordmark'} link={'https://reactjs.org/'}/>
            </SkillGrid>
            <SkillGrid
                heading={"I've worked with a few other things as well..."}>
                <SkillIcon icon={'csharp-plain'} link={'https://docs.microsoft.com/en-us/dotnet/csharp/'}/>
                <SkillIcon icon={'matlab-plain'} link={'https://www.mathworks.com/products/matlab.html'}/>
                <SkillIcon icon={'javascript-plain'} link={'https://www.javascript.com/'}/>
                <SkillIcon icon={'typescript-plain'} link={'https://www.typescriptlang.org/'}/>
                <SkillIcon icon={'mongodb-plain-wordmark'} link={'https://www.mongodb.com/'}/>
                <SkillIcon icon={'angularjs-plain'} link={'https://angular.io/'}/>
                <SkillIcon icon={'rust-plain'} link={'https://www.rust-lang.org/'}/>
                <SkillIcon icon={'go-plain'} link={'https://golang.org/'}/>
                <SkillIcon icon={'cucumber-plain'} link={'https://cucumber.io/'}/>
                <SkillIcon icon={'gradle-plain'} link={'https://gradle.org/'}/>
                <SkillIcon icon={'kotlin-plain'} link={'https://kotlinlang.org/'}/>
                <SkillIcon icon={'flask-plain'} link={'https://flask.palletsprojects.com/en/2.0.x/'}/>
            </SkillGrid>
            <SkillGrid
                heading={'Tools I\'ve used to build awesome stuff include...'}>
                <SkillIcon icon={'git-plain-wordmark'} link={'https://git-scm.com/'}/>
                <SkillIcon icon={'bitbucket-plain-wordmark'} link={'https://bitbucket.org/product'}/>
                <SkillIcon icon={'github-plain'} link={'https://github.com/'}/>
                <SkillIcon icon={'jetbrains-plain'} link={'https://www.jetbrains.com/'}/>
                <SkillIcon icon={'visualstudio-plain'} link={'https://visualstudio.microsoft.com/'}/>
                <SkillIcon icon={'vscode-plain'} link={'https://code.visualstudio.com/'}/>
                <SkillIcon icon={'ubuntu-plain'} link={'https://ubuntu.com/'}/>
                <SkillIcon icon={'windows8-plain'} link={'https://www.microsoft.com/en-gb/software-download/windows10ISO'}/>
                <SkillIcon icon={'gatsby-plain'} link={'https://www.gatsbyjs.com/'}/>
            </SkillGrid>
        </Accordion>
    )

}