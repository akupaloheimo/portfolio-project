import React from "react";
import Resume from "../assets/CV_Aku_Paloheimo.docx.pdf"

const PDFViewer = () => {
 return (
 <div>
 <iframe src={Resume} width="100%" height="500px" />
 </div>
 );
};

export default PDFViewer;