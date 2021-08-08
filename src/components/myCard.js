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
                    fontSize={'2xl'}>Abie Marshall BSc (Hons)</Text>
            </CustomHeader>
            <Text color={subtext}>🥇 First Class Physics Graduate</Text>
            <Text color={subtext}>📊 MSc Data Science Student</Text>
            <Text color={subtext}>👨🏻‍💻 Full Stack Developer</Text>
            <Stack direction={'row'} align={'center'}>
                <LinkedInButton/>
                <GithubButton/>
            </Stack>
        </PersonalCard>
    );
}

