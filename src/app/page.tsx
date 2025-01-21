'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import PDFPreview from '@/components/PDFPreview';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setFile(file);
  };

  const handleRotateAll = () => {
    // 实现全部旋转的逻辑
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-serif text-center mb-4">
        Rotate PDF Pages
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Simply click on a page to rotate it. You can then download your modified PDF.
      </p>
      
      {!file ? (
        <FileUpload onFileSelect={handleFileSelect} />
      ) : (
        <div className="bg-white rounded-lg border shadow-sm p-8">
          <PDFPreview
            file={file}
            onRotate={handleRotateAll}
            onRemove={() => setFile(null)}
          />
        </div>
      )}
    </div>
  );
} 