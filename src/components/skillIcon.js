import * as React from "react"
import {Center, Link, useColorModeValue} from "@chakra-ui/react";
import MyColours from "../theme/myColors";

export default function SkillIcon({icon, link}) {
    const color = useColorModeValue(MyColours.NavigationText[0], MyColours.NavigationText[1])
    const hoverColor = useColorModeValue(MyColours.NavigationTextHover[0], MyColours.NavigationTextHover[1])
    return (
        <Center>
            <Link
                isExternal={true}
                href={link}
                color={color}
                fontSize={{base: '5xl', md: '5xl', lg: '6xl'}}
                className={"devicon-" + icon}
                rounded={'md'}
                transition={'0.3s'}
                _hover={{
                    cursor: 'pointer',
                    color: hoverColor
                }}>
            </Link>
        </Center>
    )
}