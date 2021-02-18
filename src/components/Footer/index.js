import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer-text">
                Created by Elijah Micho 
                <a href="https://github.com/eli-micho/battleship">
                    <i className="fab fa-github-square"></i>
                </a>
            </span>
        </div>
    );
};

export default Footer;
