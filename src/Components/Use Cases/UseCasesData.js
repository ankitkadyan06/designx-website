import React, { useState } from "react";
import avarageTtat from "../Assets/Images/avarageTatt.svg";
import bdReporting from "../Assets/Images/bdReporting.svg";
import esgUseCase from "../Assets/Images/esgUseCases.svg";
import hiraAudit from "../Assets/Images/HiraAudit.svg";
import paperless from "../Assets/Images/paperless.svg";
import preventmain from "../Assets/Images/preventMaintain.svg";
import productionPlanning from "../Assets/Images/productionPlanning.svg";
import OEE from "../Assets/Images/OEE.svg";
import { Document, Page, pdfjs } from "react-pdf";
import averageTtatPdf from "../Assets/Pdfs/Average TTAT.pdf";
import bdReportingPdf from "../Assets/Pdfs/BD Reporting.pdf";
import ESGPdf from "../Assets/Pdfs/ESG_compressed.pdf";
import prodMonitoring from "../Assets/Pdfs/Production Monitoring.pdf";
import paperLessPdf from "../Assets/Pdfs/Paperless Audits.pdf";
import preventMainPdf from "../Assets/Pdfs/Preventive Maintenance.pdf";
import prodPlanning from "../Assets/Pdfs/Production Planning.pdf";
import hira_audit from "../Assets/video/HIRA_Audit.mp4";
import "../Assets/CSS/useCases.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const pdfData = [
  { label: "Average TTAT", image: avarageTtat, pdf: averageTtatPdf },
  { label: "BD Reporting", image: bdReporting, pdf: bdReportingPdf },
  { label: "ESG", image: esgUseCase, pdf: ESGPdf },
  {
    label: "Production Monitoring (OEE)",
    image: hiraAudit,
    pdf: prodMonitoring,
  },
  { label: "Paperless Audits", image: paperless, pdf: paperLessPdf },
  { label: "Preventive Maintenance", image: preventmain, pdf: preventMainPdf },
  {
    label: "Production Planning",
    image: productionPlanning,
    pdf: prodPlanning,
  },
  { label: "HIRA_Audit.mp4", image: OEE, video: hira_audit },
];

const UseCasesData = () => {
  const [numPages, setNumPages] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openPdfModal = (pdf) => {
    setSelectedPdf(pdf);
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  const onDocumentLoadSuccess = ({ numPages, error }) => {
    if (error) {
      console.error("Error loading document:", error);
    } else {
      setNumPages(numPages);
    }
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="w-full p-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.01rem] border-[2px] border-dashed border-[#727272] rounded">
        {pdfData.map((item, index) => (
          <div
            key={index}
            className="p-[10px] md:p-[20px] lg:p-[30px] border-r-[0px] sm:border-r-[2px] border-b-[2px]  border-dashed border-[#727272] cursor-pointer"
            onClick={() => {
              if (item.video) {
                openVideoModal(item.video);
              } else {
                openPdfModal(item.pdf);
              }
            }}
          >
            <img src={item.image} alt="" />
            <p className="text-[12px] md:text-[16px] lg:text-[22px] text-white font-poppins font-medium mt-[17px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {selectedPdf && (
        <div className="pdf-modal">
          <div className="pdf-container">
            <button className="close-btn" onClick={closePdfModal}>
              Close
            </button>
            <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
              ))}
            </Document>
          </div>
        </div>
      )}
      {selectedVideo && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-btn" onClick={closeVideoModal}>
              Close
            </button>
            <video autoPlay controls width="100%" height="auto">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default UseCasesData;