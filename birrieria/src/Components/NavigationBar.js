import React from 'react';
import { link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><link to="/Home">Home</link></li>
                    <li><link to="/Birria">Birria</link></li>
                    <li><link to="/Services">Services</link></li>
                    <li><link to="/Contact">Contact</link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;