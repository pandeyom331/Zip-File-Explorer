import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
  height: 200px;
  position: realtive;
  z-index: 1;
`;

export const FilePart = styled.label`
  margin: 20px 0;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  &:hover {
    transition: all 0.6s ease-in-out;
    border: 8px solid white;
  }
`;
export const FileInfoPart = styled.div`
  margin: 20px 0;
`;

export const Dictionary = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem auto;
  max-width: 90%;
`;

export const Button = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
