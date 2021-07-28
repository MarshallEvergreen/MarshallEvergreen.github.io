import * as React from "react"
import {
    Box,
    Container, HStack,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";
import ExternalLink from "./externalLink";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
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
                    </Stack>
                    <HStack direction={'row'} spacing={6}>
                        <LinkedInButton />
                        <GithubButton/>
                    </HStack>
                </Container>
            </Box>
        </Box>
    );
}
