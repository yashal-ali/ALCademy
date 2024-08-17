// components/HistoryTable.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/Schema';
import Modal from './_component/Model'; // Import the Modal component
import { marked } from 'marked';
import Spinner from './../../dashboard/_components/Spinner'; // Import the Spinner component



const fetchAllAIOutputs = async () => {
  const aiOutputs = await db.select().from(AIOutput).execute();
  return aiOutputs;
};

const HistoryTable = () => {
  const [aiOutputs, setAIOutputs] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAIOutputs() {
      const outputs = await fetchAllAIOutputs();
      setAIOutputs(outputs);
      setLoading(false);
    }

    loadAIOutputs();
  }, []);

  const handleRowClick = (content: string) => {
    setSelectedContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContent('');
  };

  // Function to truncate text to a maximum of 30 words
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <>
        <div
    className="relative px-10 tablet:px-20  min-h-[200px] py-[100px] overflow-hidden   w-full flex flex-col justify-center items-center gap-y-2 text-center bg-no-repeat bg-cover bg-fixed bg-[#007B8B] bg-center opacity-[0.93] bg-blend-multiply"
    style={{
      backgroundImage: "url('https://youthincmag.com/wp-content/uploads/2018/09/Tech-in-Education.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
  <h1 className='text-4xl font-bold text-white'>
  AIcademy
  </h1>
  <h3  className='text-2xl font-bold text-white'>
  Where Education Meets Innovation
  </h3>
  <p className='text-sm text-white'>
  Our AI-enhanced Templates are designed to adapt to your personal learning style, ensuring that you receive the guidance and support 
  </p>
 
 
</div>
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <h2 className="font-bold text-2xl mb-4">AI Output History</h2>
      {loading ? (
        <div className='flex justify-center items-center  h-screen'>
        <Spinner />
        </div>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Template</th>
              <th className="py-2 px-4 border-b">AI Response</th>
              <th className="py-2 px-4 border-b">Created By</th>
              <th className="py-2 px-4 border-b">Word Count</th>
              <th className="py-2 px-4 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {aiOutputs.map((output, index) => {
              const truncatedAiResponse = truncateText(output.aiResponse, 30);
              const htmlContent = marked(truncatedAiResponse);

              const renderHtmlContent = (content: string) => {
                const htmlContent = marked(content);
                return { __html: htmlContent };
              };

              return (
                <tr key={index} onClick={() => handleRowClick(output.aiResponse)} className="cursor-pointer hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{output.templateSlug}</td>
                  <td className="py-2 px-4 border-b">
                    <div dangerouslySetInnerHTML={renderHtmlContent(truncatedAiResponse)} />
                  </td>
                  <td className="py-2 px-4 border-b">{output.createdBy}</td>
                  <td className="py-2 px-4 border-b">{output.numberOfWords}</td>
                  <td className="py-2 px-4 border-b">{new Date(output.createdAt).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={selectedContent}
      />
    </div></>

  );
};

export default HistoryTable;
