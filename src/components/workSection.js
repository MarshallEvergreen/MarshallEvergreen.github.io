import * as React from "react"
import ExperienceSection from "./experienceSection";
import WorkInfo from "./information/workInfo";

export default function WorkSection() {
    return (
        <ExperienceSection
            number={'02.'}
            title={"Where I've worked"}
            sectionId={'Work'}
            injectedInfo={WorkInfo}/>
    );
}
