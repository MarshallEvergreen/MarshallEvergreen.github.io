import { Center, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from "react";
import MyColours from "../theme/myColors";
import ExternalLink from "./externalLink";

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
                    Hello! I'm a Data Scientist, experienced software developer, rock and synth-wave enthusiast,
                    tennis player and a long time suffering Ferrari F1 fan; currently based in Edinburgh.
                </Text>
                <Text textAlign={'justify'}>
                    {/*After being inspired by the work of the {" "}*/}
                    {/*<ExternalLink href="https://www.turing.ac.uk/" text={"Alan Turing Institute"}/>*/}
                    I've recently completed an MSc in Data Science at the University of Edinburgh. For my dissertation
                    entitled: "Segmentation of Windthrow in High Resolution Capella SAR Images Using Fully Convolutional Networks"
                    I worked part time as a data scientist at
                    <ExternalLink
                        href="https://www.earthblox.io/"
                        text={" Earth Blox"} />
                    and closely with {" "}
                    <ExternalLink
                        href="https://www.capellaspace.com/"
                        text={" Capella Space"} />, achieving a grade of 87%. I'm currently in the process of getting
                    this work published.
                </Text>
                <Text textAlign={'justify'}>
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
                </Text>
                <Text textAlign={'justify'}>
                    Previously I worked for analytical instrumentation companies where I developed instrument control software
                    and data science solutions. I am most proud of improving the self- diagnostic abilities of the instruments
                    and automating previously complex setup procedures which made these instruments more accessible to
                    less technical users! The systems I have contributed towards have been recognised as part of the
                    solution for the Pfizer – BioNTech COVID-19 vaccine!
                </Text>
            </Stack>
        </Center>
    );
}
