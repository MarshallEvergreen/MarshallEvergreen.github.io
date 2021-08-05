import * as React from "react"
import {
    Box,
    Center,
    useColorModeValue,
    Stack,
    Image,
} from '@chakra-ui/react';

export default function PersonalCard({children, image}) {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    height={'230px'}
                >
                    <Image
                        rounded={'lg'}
                        height={230}
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

