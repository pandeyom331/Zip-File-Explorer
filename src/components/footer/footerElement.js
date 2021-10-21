import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #D6D6D6;
`

export const FooterWrap = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled.div`
  color: #000000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
  font-size: 0.8rem;

`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #000000;
  font-size: 30px;
  &:hover{
    transition: all 0.2s ease-in-out;
    color: #5C7AEA;
  }
`