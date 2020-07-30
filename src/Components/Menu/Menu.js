import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonNav from '../Button/ButtonNav'
import './Menu.css'
import { Link }  from 'react';

const Menu = () => {

    return (
        <nav className="Menu">
            <a href={'/'}>
                <img className="Logo" src={Logo} alt="logo pauloflix" />
            </a>
            <ButtonNav as="a" href="/">
                Novo video!
            </ButtonNav>
        </nav>
    )
};

export default Menu;