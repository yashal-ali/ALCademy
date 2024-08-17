
import React from 'react'
import  {Template}  from './../../../type/index'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:Template | any) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
         <div className='p-5 mt-4 ml-4  rounded-md border bg-white shadow-lg flex flex-col gap-3 min-h-[200px] cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt="icon" width={50} height={50}/>
        <h2 className='font-medium text-lg' >{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
   

  )
}

export default TemplateCard