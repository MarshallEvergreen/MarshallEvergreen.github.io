import * as React from "react"
import me from './../images/me.jpg';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";

export default function MyCard() {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={me}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Abie Marshall BSc (Hons)
                    </Heading>
                    <Text color={'gray.500'}>🥇 First Class Physics Graduate</Text>
                    <Text color={'gray.500'}>📊 MSc Data Science Student</Text>
                    <Text color={'gray.500'}>👨🏻‍💻 Full Stack Developer</Text>
                    <Stack direction={'row'} align={'center'}>
                        <LinkedInButton/>
                        <GithubButton/>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}

