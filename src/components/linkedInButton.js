import * as React from "react";
import { FaLinkedin } from "react-icons/fa6";
import SocialButton from "./socialButton";

export default function LinkedInButton() {
    return (
        <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/abiemarshall/'}>
            <FaLinkedin />
        </SocialButton>
    );
};