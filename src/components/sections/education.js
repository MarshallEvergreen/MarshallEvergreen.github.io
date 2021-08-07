import * as React from "react"
import EducationInfo from "../information/educationInfo";
import ExperienceSection from "../experienceSection";

export default function Education() {
    return (
        <ExperienceSection
            number={'02.'}
            title={"What I've studied"}
            sectionId={'Education'}
            injectedInfo={EducationInfo}/>
    )
}