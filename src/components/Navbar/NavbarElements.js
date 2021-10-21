import styled from "styled-components";

export const Nav = styled.nav `
background: #C4C4C4;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div `
  justify-self: flex-end;
  cursor: pointer;
  display: flex;
  align-items: center;
width: 131.43px;
height: 70px;
left: 0px;
`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -220px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li `
  height: 70px;
  width: 177px;

   margin 0 5px;
`;

export const NavLinks = styled.button `

width: 147px;
height: 40px;
margin 15px 20px;


font-family: Reem Kufi;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 34px;
text-align: center;
background: #8E9497;



color: #000000;
  cursor: pointer;
 
  &:hover{
    transition: all 0.2s ease-in-out;
    color: #fff;
    background: #000000;
  }

`;