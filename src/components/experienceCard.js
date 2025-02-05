import {
    Box, Flex, HStack, Image, Link, List, ListIcon, ListItem, Stack, Text, useColorModeValue,
} from '@chakra-ui/react';
import * as React from "react";
import { MdCheckCircle } from "react-icons/all";
import HeaderSizes from "../theme/headerSizes";
import MyColours from "../theme/myColors";
import CustomHeader from "./heading";

export default function ExperienceCard({ info }) {
    const cardBackground = useColorModeValue(MyColours.CardBackground[0], MyColours.CardBackground[1])
    const subtext = useColorModeValue(MyColours.SubTextBlock[0], MyColours.SubTextBlock[1])
    const navNumbers = useColorModeValue(MyColours.NavigationNumber[0], MyColours.NavigationNumber[1])
    const navText = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])
    const navHover = useColorModeValue(MyColours.NavigationTextHover[0], MyColours.NavigationTextHover[1])

    return (<Box
        bg={cardBackground}
        maxW={'500px'}
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
                {<Image
                    maxW={'auto'}
                    maxH={'110px'}
                    src={info.image} />}
            </Flex>
            {(info.experience) ? (
                <Stack>
                    {info.experience.map((experienceInfo) => (
                        <Stack>
                            {(experienceInfo.title) ? (
                                <CustomHeader>
                                    <Text
                                        as={'span'}
                                        color={navNumbers}
                                        fontSize={HeaderSizes.xsmall}>{experienceInfo.title}
                                    </Text>
                                    <Link
                                        isExternal={true}
                                        href={info.link}
                                        color={navText}
                                        fontSize={HeaderSizes.xsmall}
                                        transition={'0.3s'}
                                        _hover={{
                                            cursor: 'pointer', color: navHover
                                        }}>
                                        {' @ ' + info.company}
                                    </Link>
                                </CustomHeader>)
                                : null}
                            <Text
                                color={subtext}
                                textTransform={'uppercase'}
                                fontWeight={600}
                                fontSize={'sm'}
                                letterSpacing={1.1}>
                                {experienceInfo.dates}
                            </Text>
                            <Text color={subtext}>
                                {experienceInfo.summary}
                            </Text>
                            <List spacing={3}>
                                {experienceInfo.bulletPoints.map((point) => (<ListItem>
                                    <HStack>
                                        <ListIcon as={MdCheckCircle} color={navNumbers} />
                                        <Text color={subtext}>{point}</Text>
                                    </HStack>
                                </ListItem>))}
                            </List>
                        </Stack>
                    ))}
                </Stack>) : null}
        </Stack>
    </Box>);
}
