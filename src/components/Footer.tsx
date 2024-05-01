import React from 'react';
import githubLogo from '../images/github-mark.svg';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Made by Kea-Roy</p>
            <p>
                <a href="https://github.com/kea-roy">
                    <img src={githubLogo} alt="GitHub" className={'githubLogo'}></img>
                </a>
            </p>
        </footer>
    );
};

export default Footer;