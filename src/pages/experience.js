import * as React from "react"
import Page from "./page";
import Education from "../components/education";
import Work from "../components/work";
import {Stack} from "@chakra-ui/react";

const Experience = () => {
    return <Page>
        <Stack>
            <Education/>
            <Work/>
        </Stack>
    </Page>
}

export default Experience
