import * as React from "react"
import {Box, SimpleGrid, Image, Heading} from '@chakra-ui/react';
import ExperienceCard from "./experienceCard";
import manchester from '../images/manchester.png';
import edinburgh from '../images/edinburgh.png';

export default function Education() {
    return (
        <Box p={4}
        >
            <Heading
                textAlign={'center'}
                textTransform={'uppercase'}
                fontWeight={800}
                letterSpacing={1.1}
                as="h4"
                size="lg">
                🎓 Education
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <ExperienceCard
                    title={'2021 - 2022 MSc Data Science'}
                    description={
                        'Studying how to efficiently find patterns in these vast streams of data. This means taking ' +
                        'modules on Machine Learning, Statistics, Optimization, Databases and Data Management. Hoping ' +
                        'to tailor my dissertation towards an environmental challenge where these skills can be applied. '
                    }
                    image={<Image src={edinburgh}/>}
                />
                <ExperienceCard
                    title={'2014 - 2017 Bachelor of Science (Physics) with Honours'}
                    description={
                        'Gained a good understanding of many physical systems and excellent mathematical abilities in areas covering ' +
                        'calculus, linear algebra, mathematical reasoning, probability and statistics, learnt from ' +
                        'dedicated courses and from applying the appropriate\n' +
                        'mathematics to different areas of physics.'
                    }
                    image={<Image src={manchester}/>}
                />
                <ExperienceCard
                    title={'2013 - 2014 Physics Foundation Degree'}
                    description={
                        'Progression from foundation year required an average year grade of 80% which was achieved by\n' +
                        'averaging 93%; amongst the highest in my cohort.'
                    }
                    image={<Image src={manchester}/>}
                />
            </SimpleGrid>
        </Box>
    );
}
