import * as React from "react"
import me from './../images/me.jpg';
import {
    Heading,
    Text,
    Stack,
} from '@chakra-ui/react';
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";
import PersonalCard from "./personalCard";

export default function MyCard() {
    return (
        <PersonalCard image={me}>
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
        </PersonalCard>
    );
}

