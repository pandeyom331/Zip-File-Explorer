import React from "react";
import { Cards, File, Heading, FileDes, Top, FileImg } from "./cardElement";

function Card({key, name, meaning, file}) {
  return (
      <Cards id={key}>
        <Top>
          <File role="img">
            <FileImg src={file.default} alt="om"/>
          </File>
        </Top>
        <FileDes>
          <Heading>{name}</Heading>
            {meaning}
        </FileDes>
      </Cards>
    );
}

export default Card;