import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logo.png';

function Navbar({toggle}) {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo><img src={logo} alt="Zip File Explorer " width="170px" height="90px"/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
