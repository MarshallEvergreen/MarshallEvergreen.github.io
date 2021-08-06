import * as React from "react"
import {Box, Heading, HStack, useColorModeValue} from "@chakra-ui/react";
import MyColours from "../theme/myColors";


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
            <Heading
                p={4}
                textAlign={'center'}
                fontWeight={800}
                letterSpacing={1.1}
                as="h5"
                color={navNumbers}
                size="lg">
                {number}
            </Heading>
            <Heading
                color={navText}
                textAlign={'center'}
                fontWeight={800}
                letterSpacing={1.1}
                as="h4"
                size="lg">
                {title}
            </Heading>
            <Line/>
        </HStack>
    )
}