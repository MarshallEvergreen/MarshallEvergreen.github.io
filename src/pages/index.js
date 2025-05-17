import * as React from "react";
import Layout from "../components/layout";
import AboutMe from "../components/sections/aboutMe";
import Education from "../components/sections/education";
import Hero from "../components/sections/hero";
import Work from "../components/sections/work";

const Index = () => {
    return (
        <Layout>
            <Hero />
            <AboutMe />
            <Work />
            <Education />
        </Layout>
    )
}

export default Index
