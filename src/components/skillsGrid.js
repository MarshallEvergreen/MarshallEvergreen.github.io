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
import * as React from "react";
import HeaderSizes from "../theme/headerSizes";
import MyColours from "../theme/myColors";
import CustomHeader from "./heading";
import SkillIcon from "./skillIcon";

export default function SkillsGrid() {
    const headerColor = useColorModeValue(MyColours.Header[0], MyColours.Header[1])

    const SkillGrid = ({ children, heading }) => (
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
                    <AccordionIcon />
                </AccordionButton>
            </CustomHeader>
            <AccordionPanel pb={4}>
                <SimpleGrid
                    justifyContent={'center'}
                    columns={{ base: 3, md: 6 }}
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
                <SkillIcon icon={'cplusplus-plain'} link={'https://isocpp.org/'} />
                <SkillIcon icon={'rust-plain'} link={'https://www.rust-lang.org/'} />
                <SkillIcon icon={'python-plain-wordmark'} link={'https://www.python.org/'} />
                <SkillIcon icon={'grpc-plain'} link={'https://grpc.io/'} />
                <SkillIcon icon={'docker-plain-wordmark'} link={'https://www.docker.com/'} />
                <SkillIcon icon={'react-plain-wordmark'} link={'https://reactjs.org/'} />
            </SkillGrid>
            <SkillGrid
                heading={"I've worked with a few other things as well..."}>
                <SkillIcon icon={'csharp-plain'} link={'https://docs.microsoft.com/en-us/dotnet/csharp/'} />
                <SkillIcon icon={'typescript-plain'} link={'https://www.typescriptlang.org/'} />
                <SkillIcon icon={'lua-plain-wordmark'} link={'https://www.lua.org/'} />
                <SkillIcon icon={'pytorch-original'} link={'https://pytorch.org/'} />
                <SkillIcon icon={'angularjs-plain'} link={'https://angular.io/'} />
                <SkillIcon icon={'fastify-plain'} link={'https://fastify.dev/'} />
                <SkillIcon icon={'fastapi-plain'} link={'https://fastapi.tiangolo.com/'} />
                <SkillIcon icon={'cucumber-plain'} link={'https://cucumber.io/'} />
                <SkillIcon icon={'selenium-original'} link={'https://www.selenium.dev/'} />
                <SkillIcon icon={'postgresql-plain'} link={'https://www.postgresql.org/'} />
                <SkillIcon icon={'sqlalchemy-plain'} link={'https://www.sqlalchemy.org/'} />
                <SkillIcon icon={'prisma-plain'} link={'https://www.prisma.io/'} />
                {/* <SkillIcon icon={'gradle-plain'} link={'https://gradle.org/'} /> */}
                {/* <SkillIcon icon={'kotlin-plain'} link={'https://kotlinlang.org/'} /> */}
                {/* <SkillIcon icon={'flask-plain'} link={'https://flask.palletsprojects.com/en/2.0.x/'} /> */}
            </SkillGrid>
            <SkillGrid
                heading={'Tools I\'ve used to build awesome stuff include...'}>
                <SkillIcon icon={'git-plain-wordmark'} link={'https://git-scm.com/'} />
                <SkillIcon icon={'github-original-wordmark'} link={'https://github.com/'} />
                <SkillIcon icon={'bitbucket-plain-wordmark'} link={'https://bitbucket.org/product'} />
                <SkillIcon icon={'jira-plain-wordmark'} link={'https://www.atlassian.com/software/jira'} />
                <SkillIcon icon={'jetbrains-plain'} link={'https://www.jetbrains.com/'} />
                {/* <SkillIcon icon={'visualstudio-plain'} link={'https://visualstudio.microsoft.com/'} /> */}
                <SkillIcon icon={'vscode-plain'} link={'https://code.visualstudio.com/'} />
            </SkillGrid>
            <SkillGrid
                heading={'And I\'ve then deployed and orchestrated them with...'}>
                <SkillIcon icon={'amazonwebservices-plain-wordmark'} link={'https://aws.amazon.com/'} />
                <SkillIcon icon={'terraform-plain'} link={'https://www.hashicorp.com/'} />
                <SkillIcon icon={'docker-plain-wordmark'} link={'https://www.docker.com/'} />
                <SkillIcon icon={'kubernetes-plain'} link={'https://kubernetes.io/'} />
                <SkillIcon icon={'bamboo-original'} link={'https://www.atlassian.com/software/bamboo'} />
                <SkillIcon icon={'circleci-plain'} link={'https://circleci.com/'} />
                <SkillIcon icon={'githubactions-plain'} link={'https://github.com/features/actions'} />
                <SkillIcon icon={'apacheairflow-plain'} link={'https://airflow.apache.org/'} />
                <SkillIcon icon={'pypi-plain'} link={'https://pypi.org/'} />
            </SkillGrid>
        </Accordion>
    )

}