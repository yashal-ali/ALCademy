
'use client'
import React, { useState } from "react"
import SideNavbar from "./_components/SideNavbar"
import Header from "./_components/Header"
import { TotalUsageContext } from "../(context)/TotalUsage"
import { SignIn } from "@clerk/nextjs"
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [totalUsage, setTotalUsage] = useState<any>(0)

  return (
    <TotalUsageContext.Provider value={[totalUsage, setTotalUsage]}>
     
      
         <div className="h-full">
    <div className="md:w-64 hidden md:block fixed">
    <SideNavbar/>

    </div>
     <div className="md:ml-64">
      
     {children}
     </div>
    
   </div>
    </TotalUsageContext.Provider>

  )
}