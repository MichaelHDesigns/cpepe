import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Whitepaper.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

const Whitepaper = () => (
  <div id="whitepaper" className="whitepaper">
    <h2>Whitepaper</h2>
    <div className="pdf-viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
        <Viewer fileUrl="/pdf/cPepeWhitepaper.pdf" plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  </div>
);

export default Whitepaper;
