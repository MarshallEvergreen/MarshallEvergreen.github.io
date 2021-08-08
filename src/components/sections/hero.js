import * as React from "react";
import {Button, Container, Heading, Link, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import MyColours from "../../theme/myColors";
import {EmailIcon} from "@chakra-ui/icons";

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
                py={{base: 20, md: 28, lg: 40}}
                direction={{base: 'column', md: 'row'}}>
                <Stack flex={1} spacing={{base: 5, md: 10}}>
                    <Heading
                        color={headerColors}
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{base: '1xl', sm: '2xl', lg: '3xl'}}>
                        <Text
                            as={'span'}>Hi, my name is
                        </Text>
                        <br/>
                        <Text as={'span'}
                              color={textColors}
                              fontSize={{base: '4xl', sm: '5xl', lg: '6xl'}}>Abie Marshall.
                        </Text>
                        <br/>
                        <Text as={'span'}
                              color={subtextColors}
                              fontSize={{base: '3xl', sm: '4xl', lg: '5xl'}}>I create software solutions for science.
                        </Text>
                    </Heading>
                    <Text
                        maxW={{base: '100%', md: '50%'}}
                        color={textColors}>
                        I'm a first class physics graduate and experienced software engineer
                        with a specialisation in researching, designing and implementing solutions for scientific
                        instruments.
                        Currently I'm studying an MSc in Data Science at the University of Edinburgh.
                    </Text>
                    <Stack
                        spacing={{base: 4, sm: 6}}
                        direction={{base: 'column', sm: 'row'}}>
                        <Link
                        href={'mailto:abiemarshall94@gmail.com'}
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
