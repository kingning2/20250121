'use client';

interface PDFViewerProps {
  fileUrl: string;
  onRotate?: () => void;
}

export default function PDFViewer({ fileUrl, onRotate }: PDFViewerProps) {
  return (
    <div className="relative">
      <iframe
        src={fileUrl}
        className="w-full h-[600px] border-0"
        title="PDF Viewer"
      />
      {onRotate && (
        <button
          onClick={onRotate}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full 
                   hover:bg-black/70 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.24 4.76a8 8 0 111.414 11.314l1.414 1.414a10 10 0 10-1.767-14.142l2.121 2.121-4.242 1.414 1.414-4.242 1.414 1.414a8 8 0 00-1.767 11.314z" clipRule="evenodd"/>
          </svg>
        </button>
      )}
    </div>
  );
} 