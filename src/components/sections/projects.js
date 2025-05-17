import * as React from "react";
import ExperienceSection from "../experienceSection";
import ProjectInfo from "../information/projectInfo";
export default function Projects() {
    return (
        <ExperienceSection
            number={'04.'}
            title={"Things I've built"}
            sectionId={'Projects'}
            injectedInfo={ProjectInfo} />
    )
}