import * as React from "react"
import {Box, HStack, Text, useColorModeValue} from "@chakra-ui/react";
import MyColours from "../theme/myColors";
import CustomHeader from "./heading";
import HeaderSizes from "../theme/headerSizes";


export default function SectionHeader({number, title}) {
    const navText = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])
    const navNumbers = useColorModeValue(MyColours.NavigationNumber[0], MyColours.NavigationNumber[1])

    const Line = () =>
        <Box
            top={'-5px'}
            maxW={'400px'}
            flexGrow={1}
            height={'1px'}
            background={navNumbers}
        />

    return (
        <HStack
            justifyContent={'left'}>
            <CustomHeader
                textAlign={'center'}>
                <Text
                    fontSize={HeaderSizes.small}
                    as={'span'}
                    color={navNumbers}>
                    {number + ' '}
                </Text>
                <Text
                    fontSize={HeaderSizes.small}
                    as={'span'}
                    color={navText}>
                    {title}
                </Text>
            </CustomHeader>
            <Line/>
        </HStack>
    )
}