import {
    Box, Flex, HStack, Icon, Image, Link, List, ListIcon, ListItem, Stack, Text, useColorModeValue,
} from '@chakra-ui/react';
import * as React from "react";
import { MdCheckCircle } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import HeaderSizes from "../theme/headerSizes";
import MyColours from "../theme/myColors";
import CustomHeader from "./heading";

export default function ProjectCard({ info }) {
    const cardBackground = useColorModeValue(MyColours.CardBackground[0], MyColours.CardBackground[1])
    const subtext = useColorModeValue(MyColours.SubTextBlock[0], MyColours.SubTextBlock[1])
    const navNumbers = useColorModeValue(MyColours.NavigationNumber[0], MyColours.NavigationNumber[1])
    const navText = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])
    const navHover = useColorModeValue(MyColours.NavigationTextHover[0], MyColours.NavigationTextHover[1])
    const imagePanelBg = useColorModeValue('purple.100', 'gray.800')

    const experience = info.experience?.[0]

    return (
        <Box
            bg={cardBackground}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            role={'group'}
        >
            <Flex direction={{ base: 'column', sm: 'row' }} h={{ base: 'auto', sm: '200px' }}>
                {/* Image panel — left side */}
                <Link
                    isExternal
                    href={info.link}
                    flexShrink={0}
                    w={{ base: 'full', sm: '40%' }}
                    h={{ base: '160px', sm: 'full' }}
                    _hover={{ textDecoration: 'none' }}
                >
                    <Box
                        position={'relative'}
                        w={'full'}
                        h={'full'}
                        bg={imagePanelBg}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        overflow={'hidden'}
                        p={4}
                    >
                        <Image
                            src={info.image}
                            alt={info.tabName}
                            objectFit={'contain'}
                            maxH={'full'}
                            maxW={'full'}
                            transition={'transform 0.4s ease'}
                            _groupHover={{ transform: 'scale(1.06)' }}
                        />
                        <Box
                            position={'absolute'}
                            inset={0}
                            bg={useColorModeValue('purple.400', 'teal.700')}
                            opacity={0}
                            transition={'opacity 0.3s ease'}
                            _groupHover={{ opacity: 0.2 }}
                        />
                        <Box
                            position={'absolute'}
                            bottom={2}
                            right={2}
                            opacity={0}
                            transition={'opacity 0.3s ease'}
                            _groupHover={{ opacity: 1 }}
                        >
                            <Icon as={FiExternalLink} w={4} h={4} color={useColorModeValue('purple.700', 'teal.200')} />
                        </Box>
                    </Box>
                </Link>

                {/* Content — right side */}
                <Stack
                    p={5}
                    spacing={3}
                    justify={'center'}
                    flex={1}
                    overflow={'hidden'}
                >
                    {experience?.title && (
                        <CustomHeader>
                            <Text
                                as={'span'}
                                color={navNumbers}
                                fontSize={HeaderSizes.xxsmall}>
                                {experience.title}
                            </Text>
                            <Link
                                isExternal
                                href={info.link}
                                color={navText}
                                fontSize={HeaderSizes.xxsmall}
                                transition={'0.3s'}
                                _hover={{ cursor: 'pointer', color: navHover }}>
                                {' @ ' + info.company}
                            </Link>
                        </CustomHeader>
                    )}

                    {experience?.summary && (
                        <Text color={subtext} fontSize={'sm'} noOfLines={4}>
                            {experience.summary}
                        </Text>
                    )}

                    {experience?.bulletPoints?.length > 0 && (
                        <List spacing={1}>
                            {experience.bulletPoints.map((point, i) => (
                                <ListItem key={i}>
                                    <HStack>
                                        <ListIcon as={MdCheckCircle} color={navNumbers} />
                                        <Text color={subtext} fontSize={'sm'}>{point}</Text>
                                    </HStack>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Stack>
            </Flex>
        </Box>
    );
}
