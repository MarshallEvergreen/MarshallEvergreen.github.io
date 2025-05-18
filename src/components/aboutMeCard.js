import { Center, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from "react";
import MyColours from "../theme/myColors";

export default function AboutMeCard() {
    const textColors = useColorModeValue(MyColours.TextBlock[0], MyColours.TextBlock[1])

    return (
        <Center py={10}
            pr={10}
            pl={{ base: '10', lg: '0' }}>
            <Stack
                spacing={3}
                color={textColors}
            >
                <Text textAlign={'justify'}>
                    Hey! I'm an experienced engineer who enjoys getting stuck into all aspects of the software delivery lifecycle -
                    from requirements gathering, architecture and implementation to testing and deployment. I’m also comfortable putting
                    on my math hat to dive into data science and machine learning, which gives me a unique ability to bridge the
                    gap between research and production.
                </Text>
                <Text textAlign={'justify'}>
                    I've enjoyed applying my skills to solve all kinds of real-world scientific problems, notably the systems that I
                    contributed towards were recognised as part of the solution for the Pfizer – BioNTech COVID-19 vaccine. However,
                    I have a particular passion for geospatial and earth observation data. I have contributed to several
                    publications in this area mostly focussed on apply novel machine learning techniques to satellite data
                    and using this to map above ground biomass.
                </Text>
                <Text textAlign={'justify'}>
                    When I'm inside but not at my computer you'd probably find me renovating my Edinburgh tenement,
                    putting together some metal and synth-wave playlists, gaming or occasionally painting.
                    When I'm outside, I enjoy hiking, cycling and heading to the gym.
                </Text>
                {/* <Text textAlign={'justify'}>
                    My ultimate ambition is to pursue a career where I can utilise my skills to
                    to tackle some of our biggest environmental challenges. I'm currently pursuing this at
                    <ExternalLink
                        href="https://www.sylvera.com/"
                        text={" Sylvera"} />
                    where I combine deep learning and satellite data to bring transparency to the carbon
                    markets.

                    Before that I worked on the
                    <ExternalLink
                        href="https://www.kongsberg.com/maritime/about-us/news-and-media/our-stories/babcocks-lge-business/"
                        text={" ecoSMRT"} />
                    system to minimise CO2 emissions and help the shipping industry meet it's net zero commitments.
                </Text> */}
                {/* <Text textAlign={'justify'}>
                    Previously I worked for analytical instrumentation companies where I developed instrument control software
                    and data science solutions. I am most proud of improving the self- diagnostic abilities of the instruments
                    and automating previously complex setup procedures which made these instruments more accessible to
                    less technical users! The systems I have contributed towards have been recognised as part of the
                    solution for the Pfizer – BioNTech COVID-19 vaccine!
                </Text> */}
            </Stack>
        </Center>
    );
}
