"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { History, Home, LayoutDashboardIcon, Settings, WalletCardsIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Usage from './Usage'
import logo from './../../../public/asset/icons/logo.png'

function SideNavbar() {
    const MenuList=[
        {
            name:'Home',
            icon: Home,
            path:'/'
        },
        {
            name:'Dasboard',
            icon: LayoutDashboardIcon,
            path:'/dashboard'
        },
        {
            name:'History',
            icon: History,
            path:'/dashboard/history'
        },
        

    ]
    const path=usePathname()
    useEffect(()=>{

    },[])
  return (
    
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image src={logo} alt='logo'  className='-mt-[30px] w-[150px] h-[130px]'/>
       
        </div>
        <hr className='my-6 border'/>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path} key={index}>
                <div  className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==menu.path && 'bg-primary text-white'}`}>
                    <menu.icon/>
                      <h2>{menu.name}</h2>
                  
                </div>
                </Link>
            ))}

        </div>
        <div className='absolute bottom-24 w-[216px]'>
            {/* <Usage/> */}
        </div>
    </div>
  )
}

export default SideNavbar