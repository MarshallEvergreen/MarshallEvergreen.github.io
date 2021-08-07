import * as React from "react"
import EducationInfo from "./information/educationInfo";
import ExperienceSection from "./experienceSection";

export default function EducationSection() {
    return (
        <ExperienceSection
            number={'01.'}
            title={"What I've studied"}
            sectionId={'Education'}
            injectedInfo={EducationInfo}/>
    )
}