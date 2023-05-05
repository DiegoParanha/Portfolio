import React from "react";
import {Page, Image, Document} from '@react-pdf/renderer';

export default function PDFFile() {
    return (
        <>
        <img className="resume"src="ResumePic.png" alt="" />
        <Document>
            <Page>
                <Image src="ResumePic.png"/>
            </Page>
        </Document>
        </>
    )
}
