import * as React from "react";
import FadeInView from "../components/fadeInView";
import Layout from "../components/layout";
import AboutMe from "../components/sections/aboutMe";
import Education from "../components/sections/education";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Work from "../components/sections/work";

const Index = () => {
    return (
        <Layout>
            <Hero />
            <FadeInView><AboutMe /></FadeInView>
            <FadeInView delay={0.05}><Work /></FadeInView>
            <FadeInView delay={0.05}><Education /></FadeInView>
            <FadeInView delay={0.05}><Projects /></FadeInView>
        </Layout>
    )
}

export default Index
