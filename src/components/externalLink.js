import * as React from "react";
import {Link, useColorModeValue} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

export default function ExternalLink({href, text}) {
    return (
        <Link
            color={useColorModeValue('purple.500', 'green.500')}
            href={href} isExternal>
            {text}<ExternalLinkIcon mx="2px"/>
        </Link>
    );
}