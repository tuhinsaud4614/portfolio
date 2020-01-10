import React, { Component } from "react";
import pdf from "../../assets/cv.pdf";
import classes from "./CvPdf.module.css";

export default class CvPDF extends Component {
  render() {
    return <embed src={pdf} className={`${classes.PdfViewer}`}></embed>;
  }
}
