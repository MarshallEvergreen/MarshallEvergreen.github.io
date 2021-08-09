import React from 'react';
import {Heading} from "@chakra-ui/react";

export default function CustomHeader({children}) {
    return (
        <Heading
            transition={'0.3s'}
            lineHeight={1.1}
            fontWeight={600}>
            {children}
        </Heading>

    )
}