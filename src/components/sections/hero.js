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
                            as={'span'}>Hi, my name is
                        </Text>
                        <br />
                        <Text as={'span'}
                            color={textColors}
                            fontSize={HeaderSizes.large}>Abie Marshall.
                        </Text>
                        <br />
                        <Text as={'span'}
                            color={subtextColors}
                            fontSize={HeaderSizes.medium}>I create data solutions for science.
                        </Text>
                    </CustomHeader>
                    <Text
                        maxW={{ base: '100%', md: '50%' }}
                        color={textColors}>
                        Experienced developer with a specialisation working within scientific and regulated environments
                        where I research, design and implement software and data science solutions. I have a first class
                        BSc in Physics and an MSc with distinction in Data Science. My background in Physics complements
                        my Data Science skills and allows me to excel at working within scientific domains. I aim to
                        understand the physical systems involved and capture subject matter expertise into
                        analytical solutions. I’m therefore knowledgeable with, Synthetic Aperture Radar (SAR) Liquid Gas Equipment (LGE),
                        and mass spectrometry.
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
