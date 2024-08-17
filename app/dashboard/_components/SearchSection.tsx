import { Search } from 'lucide-react';
import React from 'react';

interface SearchSectionProps {
    onSearchInput: (value: string) => void;  // Define the type for onSearchInput
}

function SearchSection({ onSearchInput }: SearchSectionProps) {
  return (
    <div
    className="relative px-10 tablet:px-20  min-h-[200px] py-[100px] overflow-hidden  w-full flex flex-col justify-center items-center  text-center bg-no-repeat bg-cover bg-fixed bg-[#007B8B] bg-center opacity-[0.93] bg-blend-multiply"
    style={{
      backgroundImage: "url('./asset/images/bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
        <h2 className='text-3xl font-bold text-white'>
            Browse All the Templates
        </h2>
        <p className='text-white'>What would you like to create today?</p>
        <div className='my-5 w-full max-w-xl'>
            <div className='flex gap-2 items-center bg-white border p-3 rounded'>
                <Search className='text-primary' />
                <input 
                    type='text' 
                    placeholder='Search Here ...' 
                    onChange={(event) => onSearchInput(event.target.value)}
                    className='outline-none bg-transparent text-black'
                />
            </div>
        </div>
    </div>
  );
}

export default SearchSection;
