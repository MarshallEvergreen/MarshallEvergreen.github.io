import { ChevronDownIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import me from '../../images/new_me.jpeg';
import HeaderSizes from "../../theme/headerSizes";
import MyColours from "../../theme/myColors";
import CustomHeader from "../heading";

export default function Hero() {
    const subtextColors = useColorModeValue(MyColours.SubTextBlock[0], MyColours.SubTextBlock[1])
    const textColors = useColorModeValue(MyColours.TextBlock[0], MyColours.TextBlock[1])
    const headerColors = useColorModeValue(MyColours.Header[0], MyColours.Header[1])
    const colorScheme = useColorModeValue(MyColours.colorScheme[0], MyColours.colorScheme[1])

    return (
        <Container minH={'95vh'} maxW={'inherit'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <CustomHeader>
                        <Text
                            color={headerColors}
                            fontSize={HeaderSizes.small}
                            as={'span'}>Hi, I'm
                        </Text>
                        <br />
                        <Text as={'span'}
                            color={textColors}
                            fontSize={HeaderSizes.large}>Abie Marshall.
                        </Text>
                        <br />
                        <Text as={'span'}
                            color={subtextColors}
                            fontSize={HeaderSizes.medium}>Turning Complex Data into Scalable Solutions.
                        </Text>
                    </CustomHeader>
                    <Text
                        maxW={{ base: '100%', md: '80%' }}
                        color={textColors}>
                        Technical solutions architect spanning the full solution lifecycle — from customer requirements
                        and research through to productionised, cloud-native delivery. With a BSc in Physics and MSc in
                        Data Science, I bring deep expertise across software engineering, Earth Observation, geospatial
                        data engineering, CI/CD, and cloud-native infrastructure. I'm passionate about applying this
                        across the entire stack to build geospatial products that create real-world impact.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Link href={'mailto:abiemarshall.dev@gmail.com'}>
                            <Button
                                variant={'outline'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={colorScheme}
                                rightIcon={<EmailIcon />}
                            >
                                Get In Touch
                            </Button>
                        </Link>
                        <ScrollLink to={'Work'} smooth={true} duration={500}>
                            <Button
                                variant={'ghost'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={colorScheme}
                                rightIcon={<ChevronDownIcon />}
                            >
                                See My Work
                            </Button>
                        </ScrollLink>
                    </Stack>
                </Stack>
                <Box
                    display={{ base: 'none', md: 'flex' }}
                    flex={1}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Image
                        src={me}
                        borderRadius={'full'}
                        boxSize={'280px'}
                        objectFit={'cover'}
                        boxShadow={'2xl'}
                        objectPosition={'center top'}
                    />
                </Box>
            </Stack>
        </Container>
    );
}
