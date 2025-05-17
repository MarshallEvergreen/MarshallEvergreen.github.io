import * as React from "react";
import ExperienceSection from "../experienceSection";
import EducationInfo from "../information/educationInfo";

export default function Education() {
    return (
        <ExperienceSection
            number={'03.'}
            title={"What I've studied"}
            sectionId={'Education'}
            injectedInfo={EducationInfo} />
    )
}