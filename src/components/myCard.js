import { Badge, Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import * as React from "react";
import me from '../images/on_hill.jpeg';
import MyColours from "../theme/myColors";
import GithubButton from "./githubButton";
import GoogleScholarButton from './googleScholarButton';
import CustomHeader from "./heading";
import LinkedInButton from "./linkedInButton";
import PersonalCard from "./personalCard";

export default function MyCard() {
    const headerColors = useColorModeValue(MyColours.Header[0], MyColours.Header[1])
    const colorScheme = useColorModeValue(MyColours.colorScheme[0], MyColours.colorScheme[1])

    return (
        <PersonalCard image={me}>
            <CustomHeader>
                <Text
                    color={headerColors}
                    fontSize={'2xl'}>Abie Marshall</Text>
            </CustomHeader>
            <Stack direction={'row'} flexWrap={'wrap'} justify={'center'} spacing={2}>
                <Badge colorScheme={colorScheme} variant={'subtle'} fontSize={'xs'} px={2} py={1} borderRadius={'md'}>
                    MSc Distinction · Data Science
                </Badge>
                <Badge colorScheme={colorScheme} variant={'subtle'} fontSize={'xs'} px={2} py={1} borderRadius={'md'}>
                    BSc First Class · Physics
                </Badge>
                <Badge colorScheme={'gray'} variant={'subtle'} fontSize={'xs'} px={2} py={1} borderRadius={'md'}>
                    Edinburgh, Scotland
                </Badge>
            </Stack>
            <Stack direction={'row'} align={'center'}>
                <LinkedInButton />
                <GithubButton />
                <GoogleScholarButton />
            </Stack>
        </PersonalCard>
    );
}

