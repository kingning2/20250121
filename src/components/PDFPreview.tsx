'use client';

import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { rotatePDF } from '@/utils/pdfUtils';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export interface PDFPreviewProps {
  file: File;
  onRemove: () => void;
  onRotate?: () => void;
}

export default function PDFPreview({ file, onRemove, onRotate }: PDFPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageRotations, setPageRotations] = useState<{ [key: number]: number }>({});
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleRotatePage = (pageNumber: number) => {
    setPageRotations(prev => ({
      ...prev,
      [pageNumber]: ((prev[pageNumber] || 0) + 90) % 360
    }));
  };

  const handleRotateAll = () => {
    const newRotations: { [key: number]: number } = {};
    for (let i = 1; i <= numPages; i++) {
      newRotations[i] = 90;
    }
    setPageRotations(prev => {
      const result: { [key: number]: number } = {};
      for (let i = 1; i <= numPages; i++) {
        result[i] = ((prev[i] || 0) + 90) % 360;
      }
      return result;
    });
  };

  const handleDownload = async () => {
    try {
      setIsProcessing(true);
      const rotatedPdfBlob = await rotatePDF(file, pageRotations);
      const downloadUrl = URL.createObjectURL(rotatedPdfBlob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = file.name.replace('.pdf', '_rotated.pdf');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error rotating PDF:', error);
      alert('Failed to rotate PDF. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onRotate}
            className="px-4 py-2 bg-[#ff5722] text-white rounded hover:bg-[#f4511e] transition-colors"
            disabled={isProcessing}
          >
            Rotate all
          </button>
          <button
            onClick={onRemove}
            className="px-4 py-2 bg-[#1f2937] text-white rounded hover:bg-gray-800 transition-colors"
            disabled={isProcessing}
          >
            Remove PDF
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      <Document
        file={previewUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="flex flex-wrap gap-8 justify-center"
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div key={`page_${index + 1}`} className="relative group">
            <Page
              pageNumber={index + 1}
              width={300}
              rotate={pageRotations[index + 1] || 0}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
            <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
              {index + 1}
            </div>
            <button
              onClick={() => handleRotatePage(index + 1)}
              className="absolute top-2 right-8 bg-[#ff5722] text-white p-1.5 rounded-full 
                       hover:bg-[#f4511e] transition-colors"
              disabled={isProcessing}
              title="Rotate page"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15.24 4.76a8 8 0 111.414 11.314l1.414 1.414a10 10 0 10-1.767-14.142l2.121 2.121-4.242 1.414 1.414-4.242 1.414 1.414a8 8 0 00-1.767 11.314z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        ))}
      </Document>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleDownload}
          className="px-6 py-2.5 bg-[#ff5722] text-white rounded hover:bg-[#f4511e] transition-colors disabled:opacity-50"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Download'}
        </button>
      </div>
    </div>
  );
} 