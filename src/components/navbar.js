import * as React from "react"
import Scroll, { Link as ScrollLink } from "react-scroll";
import logo from '../images/logo.svg';
import {
    Box,
    Flex,
    HStack,
    Text,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack, Image, Spacer
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

const Links = [
    {
        'label': ['01.', 'Education'],
        'link': 'Education'
    },
    {
        'label': ['02.', 'Work'],
        'link': 'Work'
    }
]

const scroll = Scroll.animateScroll;

const HomeLink = () => (
    <HStack spacing={8}>
        <Image
            onClick={() => scroll.scrollToTop()}
            cursor={'pointer'}
            src={logo}
            minW={'40px'}
            maxW={'80px'}
            height={'auto'}
        />
    </HStack>
)

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const NavLink = ({ label, link }) => (
        <ScrollLink
            to={link}
            spy={true}
            smooth={true}
            duration={500}>
            <HStack
                onClick={isOpen ? onClose : onOpen}
                px={2}
                py={1}
                rounded={'md'}
                transition={'0.3s'}
                _hover={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: useColorModeValue('purple.600', 'gray.700'),
                }}>
                <Text color={useColorModeValue('purple.600', 'gray.700')}>{label[0]}</Text>
                <Text>{label[1]}</Text>
            </HStack>
        </ScrollLink>
    )
    return (
        <Box
            position={'fixed'}
            width={'100%'}
            zIndex={10}
            borderBottomWidth={1}
            borderStyle={'solid'}
            bg={useColorModeValue('white', 'gray.900')} px={4}>
            <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                <HomeLink/>
                <Spacer flexGrow={1}/>
                <HStack spacing={8}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((info) => (
                            <NavLink label={info['label']} link={info['link']}/>
                        ))}
                    </HStack>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((info) => (
                            <NavLink label={info['label']} link={info['link']}/>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
