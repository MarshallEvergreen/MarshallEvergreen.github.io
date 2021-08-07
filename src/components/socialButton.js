import {chakra, useColorModeValue, VisuallyHidden} from "@chakra-ui/react";
import * as React from "react";

export default function SocialButton({children: icon, label, href}) {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.300')}
            color={useColorModeValue('gray.800', 'blue.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('purple.100', 'green.300'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {icon}
        </chakra.button>
    );
};