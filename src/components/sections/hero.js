import * as React from "react";
import {Button, Container, Link, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import MyColours from "../../theme/myColors";
import {EmailIcon} from "@chakra-ui/icons";
import CustomHeader from "../heading";
import HeaderSizes from "../../theme/headerSizes";

export default function Hero() {
    const subtextColors = useColorModeValue(MyColours.SubTextBlock[0], MyColours.SubTextBlock[1])
    const textColors = useColorModeValue(MyColours.TextBlock[0], MyColours.TextBlock[1])
    const headerColors = useColorModeValue(MyColours.Header[0], MyColours.Header[1])
    const colorScheme = useColorModeValue(MyColours.colorScheme[0], MyColours.colorScheme[1])
    return (
        <Container minH={'95vh'} maxW={'inherit'}>
            <Stack
                align={'center'}
                spacing={{base: 8, md: 10}}
                py={{base: 20, md: 28}}
                direction={{base: 'column', md: 'row'}}>
                <Stack flex={1} spacing={{base: 5, md: 10}}>
                    <CustomHeader>
                        <Text
                            color={headerColors}
                            fontSize={HeaderSizes.small}
                            as={'span'}>Hi, my name is
                        </Text>
                        <br/>
                        <Text as={'span'}
                              color={textColors}
                              fontSize={HeaderSizes.large}>Abie Marshall.
                        </Text>
                        <br/>
                        <Text as={'span'}
                              color={subtextColors}
                              fontSize={HeaderSizes.medium}>I create software solutions for science.
                        </Text>
                    </CustomHeader>
                    <Text
                        maxW={{base: '100%', md: '50%'}}
                        color={textColors}>
                        Will complete an MSc in Data Science in August 2022 which I have tailored to combine
                        two fields I am passionate about: Earth Observation and Machine Learning. Currently working
                        part time as an Earth Observation Data Scientist. I'm a first class physics graduate
                        and experienced software engineer with a previous specialisation in researching, designing and
                        implementing solutions for scientific instruments.
                    </Text>
                    <Stack
                        spacing={{base: 4, sm: 6}}
                        direction={{base: 'column', sm: 'row'}}>
                        <Link
                            href={'mailto:abiemarshall.dev@gmail.com'}
                        >
                            <Button
                                variant={'outline'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={colorScheme}
                                rightIcon={<EmailIcon/>}
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
