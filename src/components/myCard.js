import { Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import * as React from "react";
import me from '../images/on_hill.jpeg';
import MyColours from "../theme/myColors";
import GithubButton from "./githubButton";
import GoogleScholarButton from './googleScholarButton';
import CustomHeader from "./heading";
import LinkedInButton from "./linkedInButton";
import PersonalCard from "./personalCard";

export default function MyCard() {
    const subtext = useColorModeValue(MyColours.SubTextBlock[0], MyColours.SubTextBlock[1])
    const headerColors = useColorModeValue(MyColours.Header[0], MyColours.Header[1])

    return (
        <PersonalCard image={me}>
            <CustomHeader>
                <Text
                    color={headerColors}
                    fontSize={'2xl'}>Abie Marshall | MSc | BSc</Text>
            </CustomHeader>
            <Text color={subtext}>🏆 MSc Distinction - Data Science</Text>
            <Text color={subtext}>🥇 BSc First Class - Physics</Text>
            <Text color={subtext}>👨🏻‍💻 Awesome Development Skills</Text>
            <Stack direction={'row'} align={'center'}>
                <LinkedInButton />
                <GithubButton />
                <GoogleScholarButton />
            </Stack>
        </PersonalCard>
    );
}

