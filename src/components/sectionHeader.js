import * as React from "react"
import {Box, Heading, HStack, useColorModeValue} from "@chakra-ui/react";

const Line = () =>
    <Box
        top={'-5px'}
        maxW={'400px'}
        flexGrow={1}
        height={'1px'}
        background={useColorModeValue('purple.600', 'gray.700')}
    />

export default function SectionHeader({number, title}) {
    return (
        <HStack
            justifyContent={'left'}>
            <Heading
                textAlign={'center'}
                fontWeight={800}
                letterSpacing={1.1}
                as="h5"
                color={useColorModeValue('purple.600', 'purple.300')}
                size="lg">
                {number}
            </Heading>
            <Heading
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