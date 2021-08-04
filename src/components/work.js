import * as React from "react"
import {Box, SimpleGrid, Image, Heading} from '@chakra-ui/react';
import ExperienceCard from "./experienceCard";
import kratos from '../images/kratos.png';
import waters from '../images/waters.jpg';

export default function Work() {
    return (
        <Box p={4}
             id={'Work'}>
            <Heading
                textAlign={'center'}
                textTransform={'uppercase'}
                fontWeight={800}
                letterSpacing={1.1}
                as="h4"
                size="lg">
                💼 Work
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <ExperienceCard
                    title={'Software Engineer'}
                    description={
                        ''
                    }
                    image={<Image src={kratos}/>}
                />
                <ExperienceCard
                    title={'Junior Software Engineer'}
                    description={
                        ''
                    }
                    image={<Image src={waters}/>}
                />
                <ExperienceCard
                    title={'Mass Spectrometer Development Scientist'}
                    description={
                        ''
                    }
                    image={<Image src={waters}/>}
                />
            </SimpleGrid>
        </Box>
    );
}
