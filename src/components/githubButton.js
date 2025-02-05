import * as React from "react";
import { FaGithub } from "react-icons/fa";
import SocialButton from "./socialButton";

export default function GithubButton() {
    return (
        <SocialButton label={'LinkedIn'} href={'https://github.com/MarshallEvergreen'}>
            <FaGithub />
        </SocialButton>
    );
};