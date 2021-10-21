import React from 'react'
import { FooterContainer, FooterWrap, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights,SocialIconLink } from './footerElement';
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                           Zip File Explorer 
                        </SocialLogo>
                        <WebsiteRights> Zip File Explorer  © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/solo_thinker_134/' target='_blank' arial-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://twitter.com/Omanandpandey3' target='_blank' arial-label='Facebook'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/om-anand-pandey-85612b1ab/' target='_blank' arial-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/pandeyom331' target='_blank' arial-label='Youtube'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
