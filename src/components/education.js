import * as React from "react"
import {Box, SimpleGrid, Icon, Text, Stack, Flex, Image, useColorModeValue, Heading} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import manchester from '../images/manchester.png';
import edinburgh from '../images/edinburgh.png';

const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex minH={'180px'}
                align={'center'}
                justify={'center'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function Education() {
    return (
        <Box p={4}
             bg={useColorModeValue('purple.50', 'gray.900')}
             color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Heading>🎓 Education</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Image src={manchester} />}
                    title={'2013 - 2014 Physics Foundation Degree'}
                    text={
                        'Progression from foundation year required an average year grade of 80% which was achieved by\n' +
                        'averaging 93%; amongst the highest in my cohort.'
                    }
                />
                <Feature
                    icon={<Image src={manchester} />}
                    title={'2014 - 2017 Bachelor of Science (Physics) with Honours'}
                    text={
                        'Gained a good understanding of many physical systems and excellent mathematical abilities in areas covering ' +
                        'calculus, linear algebra, mathematical reasoning, probability and statistics, learnt from ' +
                        'dedicated courses and from applying the appropriate\n' +
                        'mathematics to different areas of physics.'
                    }
                />
                <Feature
                    icon={<Image src={edinburgh} />}
                    title={'2021 - 2022 MSc Data Science'}
                    text={
                        'Studying how to efficiently find patterns in these vast streams of data. This means taking ' +
                        'modules on Machine Learning, Statistics, Optimization, Databases and Data Management. Hoping' +
                        'to tailor my dissertation towards an environmental challenge where these skills can be applied. '
                    }
                />
            </SimpleGrid>
        </Box>
    );
}
