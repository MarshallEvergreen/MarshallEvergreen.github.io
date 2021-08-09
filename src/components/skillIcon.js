import * as React from "react"
import {Center, Text, useColorModeValue} from "@chakra-ui/react";
import MyColours from "../theme/myColors";
import HeaderSizes from "../theme/headerSizes";

export default function SkillIcon({icon}) {
    const color = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])
    const hoverColor = useColorModeValue(MyColours.NavigationTextHover[0], MyColours.NavigationTextHover[1])
    return (
        <Center>
            <Text
                color={color}
                fontSize={HeaderSizes.medium}
                className={"devicon-" + icon}
                rounded={'md'}
                transition={'0.3s'}
                _hover={{
                    cursor: 'pointer',
                    color: hoverColor
                }}/>
        </Center>
    )
}