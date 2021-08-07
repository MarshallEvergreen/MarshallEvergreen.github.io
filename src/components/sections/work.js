import * as React from "react"
import ExperienceSection from "../experienceSection";
import WorkInfo from "../information/workInfo";

export default function Work() {
    return (
        <ExperienceSection
            number={'03.'}
            title={"Where I've worked"}
            sectionId={'Work'}
            injectedInfo={WorkInfo}/>
    );
}
