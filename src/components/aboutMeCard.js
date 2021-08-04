import * as React from "react"
import {
    Center,
    Text,
    Heading, Stack
} from '@chakra-ui/react';
import ExternalLink from "./externalLink";

export default function AboutMeCard() {
    return (
        <Center py={10}
                pr={10}
                pl={{base: '10', lg: '0'}}>
            <Stack spacing={3}>
                <Heading as="h1" size="4xl">
                    Hello_World!
                </Heading>
                <Text textAlign={'justify'}>
                    I am a first-class physics graduate and experienced full-stack software engineer, currently based in
                    Edinburgh. 🏰
                </Text>
                <Text textAlign={'justify'}>
                    Until recently I have worked for scientific instrument companies where I researched, designed
                    and implemented instrument control software and data science solutions for Mass Spectrometers. 🔬
                    My background and knowledge allowed me to excel in interpreting scientific and software concepts
                    from relevant parties and improving communication between departments.
                </Text>
                <Text textAlign={'justify'}>
                    What I am most proud of during this time is improving the self- diagnostic abilities of the instruments
                    and automating previously complex setup procedures which made these instruments more accessible to less
                    technical users! 😀 The systems I have contributed towards have been recognised as part of the solution for the Pfizer –
                    BioNTech COVID-19 vaccine! 💉
                </Text>
                <Text textAlign={'justify'}>
                    After being inspired by the work of the {" "}
                    <ExternalLink href="https://www.turing.ac.uk/" text={"Alan Turing Institute"}/>
                    I am now starting {" "}
                    <ExternalLink
                        href="https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2021&id=902"
                        text={"Data Science MSc"}/>
                    at the University of Edinburgh. My ultimate ambition afterwards is to pursue a career where these
                    skills can be utilized to tackle some of our biggest environmental challenges. 🌍
                </Text>
            </Stack>
        </Center>
    );
}
