import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside `
    position:fixed;
    z-index:999;
    width: 100%;
    height:100%;
    background: #C4C4C4;
    display: grid;
    align-items:center;
justify-content:center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
    
`;

export const CloseIcon = styled(FaTimes)
`color:#0d0d0d;
`;

export const Icon = styled.div `
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;

export const SidebarWrapper = styled.div `
    color:#0d0d0d;
`;

export const SidebarMenu  = styled.ul`
 display:grid;
 grid-template-columns:1fr;
 grid-template-rows:repeat(6, 80px);
 text-align:center;

 @media screen and (max-width:480px)
 {
   grid-template-rows: repeat(6, 60px);   
 }
`;

export const SidebarLink = styled.li`

width: 147px;
height: 40px;
margin 15px 20px;
text-decoration:none;
align-items:center;
justify-content:center;
display:flex;


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
    
