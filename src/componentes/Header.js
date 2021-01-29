import React from 'react';
// Debemos importar el {Link} para que funcionen los links
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <ContenedorHeader>
            <Titulo>Mi blog personal</Titulo>
            <Menu>
                    {/* Los links en React se escriben asi, en vez de de los li */}
                    <NavLink to="/" exact={true}>Inicio</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/acerca-de">Acerca de</NavLink>
            </Menu>
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;
const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover{
        color: #191668;
    }
    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
`;
export default Header;