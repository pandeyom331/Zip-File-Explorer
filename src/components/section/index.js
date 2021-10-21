import React from 'react'
import logo from "../../images/1.png"
import { Button, HeroContainer, FilePart, FileInfoPart, Dictionary } from './style'
import data from "./data";
import Card from './card';
// import * as fflate from 'fflate';
// import { gzipSync } from 'fflate';

const pako = require('pako');


function CardData(data) {
    return (<Card
     {...data}
    />);
  }

function section() {

    // const [origImage, setOrigImage] = useState("");

    // const [origImageFile, setOrigImageFile] = useState("");

    // const [compressedImage, setCompressedImage] = useState("");

    // const [fileName, setFileName] = useState("");

    // const handle = (e) => {

    //     const File = e.target.files[0];
    //     setOrigImage(File);
    //     setOrigImageFile(File);
    //     setFileName(File.name);

    // }


    // const handleCompressedFile = (e) => {
    //     e.preventDefault();

    //     const input = new Uint8Array({origImageFile});
    //     //... fill input data here
    //     const output = pako.deflate(input);

    //     // Inflate (simple wrapper can throw exception on broken stream)
    //     //
    //     const compressed = new Uint8Array();
    //     //... fill data to uncompress here
    //     try {
    //         const result = pako.inflate(compressed);
    //         const downloadLink = URL.createObjectURL(result);
    //         // ... continue processing
    //         setCompressedImage(downloadLink);
    //     } catch (err) {
    //         console.log(err);
    //     }

    // }


    return (
        <>
        <HeroContainer id="home">
            <FilePart>
                <Button type="file"/>
                <img src={logo} alt="logo" width="100px" height="100px" />
            </FilePart>
        </HeroContainer>

            <FileInfoPart>
                <Dictionary>
                    {data.map(CardData)}
                </Dictionary>
            </FileInfoPart>
            </>
    )
}

export default section





