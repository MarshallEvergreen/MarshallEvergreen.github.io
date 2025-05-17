import * as React from "react";
import { FaGoogleScholar } from "react-icons/fa6";
import SocialButton from "./socialButton";

export default function GoogleScholarButton() {
    return (
        <SocialButton label={'GoogleScholar'} href={'https://scholar.google.com/citations?user=1GBKDTgAAAAJ&hl=en'}>
            <FaGoogleScholar />
        </SocialButton>
    );
};