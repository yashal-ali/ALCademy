"use client";
import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';
import TemplatesList from './_components/TemplatesList';

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>('');  // Initialize with an empty string

  return (
    <div className=''>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />  
        <div className='my-4'>
      <TemplatesList userSearchInput={userSearchInput} />
      </div>
    </div>
  );
}

export default Dashboard;
