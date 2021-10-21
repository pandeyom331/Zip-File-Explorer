import styled from "styled-components";

export const Cards = styled.div`
  text-align: left;
  max-width: 40rem;
  margin-bottom: 3rem;
  padding: 2rem;
  display: flex;
  border-radius: 1rem;
  box-shadow: 0 5px 10px rgba(13, 15, 22, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  background-color: #fff;
  cursor: pointer;
`;

export const File = styled.span`
  margin: 0 auto 20px;
  display: block;
  font-size: 400%;
`;

export const Heading = styled.h2`
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 800;

  &:hover {
    background-image: linear-gradient(
      102.1deg,
      rgb(51, 76, 190) 8.7%,
      rgb(35, 248, 255) 88.1%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const FileDes = styled.dd`
  margin-top: 1rem;
  font-size: 92.5%;
  margin-left: 0;
`;

export const Top = styled.dt`
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: inherit;
`;

export const FileImg = styled.img`
  width: 100px;
`;
