import Image from 'next/image';

import React from 'react';
import { Link, Element } from 'react-scroll';

const MyFooter = () => {

    return (
        <footer className="footer">
            <a
                href="https://github.com/VladDrag"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/github_light.png" alt="GitHub Logo" width={32} height={32} />
            </a>
            <a
                href="https://linkedin.com/in/vdra"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/linkedin_light.png" alt="LinkedIn Logo" width={32} height={32} />
            </a>
            <a
                href="https://twitter.com/VladDrg"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/twitter_light.png" alt="Twitter Logo" width={32} height={32} />
            </a>
        </footer>
    );
};

export default MyFooter;