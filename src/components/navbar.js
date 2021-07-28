import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
    Box,
    Flex,
    HStack,
    Text,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['About', 'Publications'];

const NavLink = ({ label, link }) => (
    <GatsbyLink to={"/" + link.toLowerCase() + "/"}>
        <Text
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('green.100', 'gray.700'),
        }}>{label}</Text>
    </GatsbyLink>

)

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                borderBottomWidth={1}
                borderStyle={'solid'}
                bg={useColorModeValue('purple.50', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <NavLink label={'Abie Marshall'} link={'#'}/>
                    <HStack spacing={8} alignItems={'right'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink label={link} link={link}/>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink label={link} link={link}/>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
