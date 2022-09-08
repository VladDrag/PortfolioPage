import React from 'react';
import { Link, Element } from 'react-scroll';
import { Text, Container } from '@nextui-org/react';
import Zoom from 'react-reveal/Zoom';
import Image from 'next/image';

const AboutMe = () => {
    return (
        <Element name="aboutme">
            <div className="section aboutme">
                <Zoom>
                    <br />
                    <Text h2 size={"2.5rem"} className="color-66bfbf">About Me</Text>
                    <br />
                    <Text b className="color-EEE6CE">I&apos;m Vlad Dragomir and I&apos;m currently based in Oslo, Norway</Text>
                    <Text b className="color-EEE6CE">I started programming 2 years ago.</Text>
                    <Text b className="color-EEE6CE">I started writing simple python scripts.</Text>
                    <Text b className="color-EEE6CE">I really enjoyed it so I enrolled to a software engineering school in Germany.</Text>
                    <Text b className="color-EEE6CE">Now I am a web developer, working as a consultant for S.A.L.T.</Text>
                    <br />
                    <Text b className="color-EEE6CE">Anyhow, this is my passion and I thank you for visiting my site</Text>
                </Zoom>
                <Link to="techskills" spy={true} smooth={true}>
                    <Image src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" width={100} height={100} />
                </Link>
            </div>
        </Element>
    );
};

export default AboutMe;