import * as React from "react"
import {
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue, Flex,
} from '@chakra-ui/react';

export default function EducationCard({degree, description, image}) {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Stack>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        mb={1}>
                        {image}
                    </Flex>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            {degree}
                        </Text>
                        <Text color={'gray.500'}>
                            {description}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
