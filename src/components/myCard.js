import * as React from "react"
import me from '../images/me.jpg';
import {Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";
import PersonalCard from "./personalCard";
import MyColours from "../theme/myColors";
import CustomHeader from "./heading";

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
                <LinkedInButton/>
                <GithubButton/>
            </Stack>
        </PersonalCard>
    );
}

