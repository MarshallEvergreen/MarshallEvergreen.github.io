import * as React from "react"
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import SocialButton from "./socialButton";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithAppLinksAndSocial() {
    return (
        <Box
            bg={useColorModeValue('purple.50', 'gray.900')}
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
                    <Text>© 2021 Abie Marshall. Built with {" "}
                        <Link href="https://www.gatsbyjs.com/" isExternal>
                            Gatsby<ExternalLinkIcon mx="2px" />
                        </Link>
                        {" + "}
                        <Link href="https://reactjs.org/" isExternal>
                            React<ExternalLinkIcon mx="2px" />
                        </Link>
                        {" + "}
                        <Link href="https://chakra-ui.com/" isExternal>
                            Chakra UI<ExternalLinkIcon mx="2px" />
                        </Link>
                    </Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'LinkedIn'} href={'#'}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'GitHub'} href={'#'}>
                            <FaGithub />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
