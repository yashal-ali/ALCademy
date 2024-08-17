import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between bg-white '>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
            <Search/>
            <input type='text' placeholder='Search Here ...'
            className='outline-none'/>
        </div>
      
    </div>
  )
}

export default Header