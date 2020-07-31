import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonNav from '../Button/ButtonNav'
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {

    return (
        <nav className="Menu">
            <Link to={"/"}>
                <img className="Logo" src={Logo} alt="logo pauloflix" />
            </Link>
            <ButtonNav /*as={Link}*/ to={"/teste"}>
                Novo video!
            </ButtonNav>
        </nav>
    )
};

export default Menu;