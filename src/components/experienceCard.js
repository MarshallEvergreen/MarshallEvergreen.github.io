import * as React from "react"
import {Box, Center, Flex, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import MyColours from "../theme/myColors";

export default function ExperienceCard({dates, description, image}) {
    const cardBackground = useColorModeValue(MyColours.CardBackground[0], MyColours.CardBackground[1])
    const subtext = useColorModeValue(MyColours.SubTextBlock[0], MyColours.SubTextBlock[1])

    return (
        <Center
            py={6}>
            <Box
                bg={cardBackground}
                maxW={'445px'}
                w={'full'}
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
                            {dates}
                        </Text>
                        <Text color={subtext}>
                            {description}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
