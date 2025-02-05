import { Box, Center, Image, Stack, useColorModeValue, } from '@chakra-ui/react';
import * as React from "react";
import MyColours from "../theme/myColors";

export default function PersonalCard({ children, image }) {
    const cardBackground = useColorModeValue(MyColours.CardBackground[0], MyColours.CardBackground[1])
    return (
        <Center py={12}>
            <Box
                bg={cardBackground}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    height={'230px'}
                >
                    <Image
                        align={'center'}
                        rounded={'lg'}
                        height={268}
                        width={282}
                        objectFit={'cover'}
                        src={image}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    {children}
                </Stack>
            </Box>
        </Center>
    );
}

