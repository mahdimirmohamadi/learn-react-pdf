import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import BasicDocument from "./components/MyDocument";
import ReactPDF from "@react-pdf/renderer";

const App = () => {
  const [showPDF, setShowPDF] = useState(false);

  const openPDF = () => {
    setShowPDF((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={openPDF}>Show me that beautiful PDF</button>
      {showPDF && <BasicDocument />}
    </div>
  );
};

export default App;
