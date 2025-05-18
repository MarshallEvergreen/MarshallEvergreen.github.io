import { EmailIcon } from "@chakra-ui/icons";
import { Button, Container, Link, Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import * as React from "react";
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
                        maxW={{ base: '100%', md: '50%' }}
                        color={textColors}>
                        Experienced Software/Data/ML Engineer with a strong foundation in data science (BSc in
                        Physics, MSc in Data Science). I’ve had the privilege to work across the tech spectrum and led impactful
                        Software/Data/ML projects across several scientific industries - from mass spectrometry to earth observation.
                        I bring a blend of skills that allow me to excel at researching solutions whilst also able to
                        productionise and deploy these. I enjoy working with strongly typed languages with extensive experience
                        in modern C++ and Rust, and more recently, Python with mypy and ruff set to hard mode.
                        TypeScript isn't too bad either! I’m passionate about writing maintainable code with a focus on
                        solid architecture and best practices like TDD.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Link
                            href={'mailto:abiemarshall.dev@gmail.com'}
                        >
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
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
}
