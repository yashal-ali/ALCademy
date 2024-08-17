import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/Schema'
import { eq } from 'drizzle-orm'; 
import { TotalUsageContext } from '@/app/(context)/TotalUsage'

async function fetchTotalUsage(email: string): Promise<number> {
    const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, email))
    let totalUsage = 0
    result.forEach(element => {
      totalUsage += Number(element.numberOfWords)
    })
  
    console.log('Total Usage:', totalUsage)
  
    return totalUsage
}

function Usage() {
  const { user } = useUser()
  const [totalUsage, setTotalUsage] = useContext(TotalUsageContext);

  useEffect(() => {
    async function loadUsage() {
      if (user?.primaryEmailAddress?.emailAddress) {
        const usage = await fetchTotalUsage(user.primaryEmailAddress.emailAddress)
        setTotalUsage(usage)
      }
    }
    loadUsage()
  }, [user])

  return (
    <div className='bg-primary text-white p-3 rounded-lg'>
      <div>
        <h2 className='font-bold'>Credits</h2>
        <div className='h-5 bg-[#055863] w-full rounded-full mt-4'>
          <div className='h-5 bg-white w-full rounded-full' style={{ width: `${(totalUsage / 6000) * 100}%` }}></div>
        </div>
      </div>
      <h2 className='text-sm mt-1'>
        {totalUsage} credit used
      </h2>
     
    </div>
  )
}

export default Usage
