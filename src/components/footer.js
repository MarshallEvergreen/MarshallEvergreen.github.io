import * as React from "react"
import {
    Box,
    HStack,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";
import ExternalLink from "./externalLink";
import MyColours from "../theme/myColors";

export default function Footer() {
    const footerBackground = useColorModeValue(MyColours.NavFooter[0], MyColours.NavFooter[1])
    return (
        <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            bg={footerBackground}
            color={useColorModeValue('gray.700', 'gray.200')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <Stack
                as={Stack}
                p={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ md: 'space-between' }}
                align={{ md: 'center' }}>
                <Stack>
                    <Text>© 2021 Abie Marshall. Built by me! Using {" "}
                        <ExternalLink href="https://www.gatsbyjs.com/" text={"Gatsby"}/>
                        {" + "}
                        <ExternalLink href="https://reactjs.org/" text={"React"}/>
                        {" + "}
                        <ExternalLink href="https://chakra-ui.com/" text={"Chakra UI"}/>
                    </Text>
                    <Text>Icons made by {" "}
                        <ExternalLink href="https://www.flaticon.com/authors/pixel-perfect" text={"Pixel perfect"}/>
                        from {" "}
                        <ExternalLink href="https://www.flaticon.com/" text={"www.flaticon.com"}/>
                    </Text>
                    <Text>Backgrounds customised at {" "}
                        <ExternalLink href="https://www.svgbackgrounds.com/" text={"SVG Backgrounds"}/>
                    </Text>
                </Stack>
                <HStack
                    justify={{ base: 'center', md:'flex-end' }}>
                    <LinkedInButton />
                    <GithubButton/>
                </HStack>
            </Stack>
        </Box>
    )
}
