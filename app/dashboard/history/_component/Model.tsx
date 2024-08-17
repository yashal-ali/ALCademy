// components/Modal.tsx
import React from 'react';
import { marked } from 'marked';
import { CopyIcon, Cross, CrossIcon, SidebarClose } from 'lucide-react';
import { copyToClipboard } from '@/constant';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  // Convert Markdown content to HTML
  const htmlContent = marked(content);

  // Function to copy text to clipboard


  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg shadow-lg w-[70%] h-[65%] overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <button
          className="absolute top-2 right-10 text-gray-500 hover:text-gray-800 text-xl"
          onClick={()=>copyToClipboard(content)}
          title="Copy Text"
        >
          <CopyIcon />
        </button>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
          aria-label='close'
          title="Close"
        >
          <SidebarClose/>
        </button>
        <h2 className="text-xl font-bold mb-2">AI Response</h2>
        <div
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
};

export default Modal;
