import * as React from "react"
import Scroll, {Link as ScrollLink} from "react-scroll";
import lightLogo from '../images/logo-light.svg';
import darkLogo from '../images/logo-dark.svg';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Spacer,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import MyColours from "../theme/myColors";

const Links = [
    {
        'label': ['01.', 'About'],
        'link': 'About'
    },
    {
        'label': ['02.', 'Education'],
        'link': 'Education'
    },
    {
        'label': ['03.', 'Work'],
        'link': 'Work'
    },
    {
        'label': ['04.', 'Skills'],
        'link': 'Skills'
    }
]

const scroll = Scroll.animateScroll;

export default function Navbar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navNumbers = useColorModeValue(MyColours.NavigationNumber[0], MyColours.NavigationNumber[1])
    const navText = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])
    const navTextHover = useColorModeValue(MyColours.NavigationTextHover[0], MyColours.NavigationTextHover[1])
    const {colorMode, toggleColorMode} = useColorMode()
    const navbarBackground = useColorModeValue(MyColours.NavFooter[0], MyColours.NavFooter[1])

    const NavLink = ({label, link}) => (
        <ScrollLink
            to={link}
            spy={true}
            smooth={true}
            duration={500}>
            <HStack
                color={navText}
                onClick={isOpen ? onClose : onOpen}
                px={2}
                py={1}
                rounded={'md'}
                transition={'0.3s'}
                _hover={{
                    cursor: 'pointer',
                    color: navTextHover
                }}>
                <Text color={navNumbers}>{label[0]}</Text>
                <Text>{label[1]}</Text>
            </HStack>
        </ScrollLink>
    )

    const HomeLink = () => (
        <HStack>
            <Image
                padding={'5px'}
                onClick={() => scroll.scrollToTop()}
                cursor={'pointer'}
                src={colorMode === "light" ? lightLogo : darkLogo}
                minW={'40px'}
                maxW={'80px'}
                height={'auto'}
            />
        </HStack>
    )

    return (
        <Box
            bg={navbarBackground}
            position={'fixed'}
            width={'100%'}
            zIndex={10}
            borderBottomWidth={1}
            borderStyle={'solid'}
            px={4}>
            <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                <HomeLink/>
                <Spacer flexGrow={1}/>
                <HStack spacing={8}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{base: 'none', md: 'flex'}}>
                        {Links.map((info) => (
                            <NavLink label={info['label']} link={info['link']}/>
                        ))}
                    </HStack>
                    <IconButton
                        onClick={toggleColorMode}
                        icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                        aria-label={'Color Theme'}
                    />
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{md: 'none'}}>
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
