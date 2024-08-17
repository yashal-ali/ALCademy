
'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import FormSection from '../_component/FormSection'
import OutputSection from '../_component/OutputSection'
import { Template } from '@/type'
import { Templates } from '@/constant'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AIModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsage'
import { useRouter } from 'next/navigation'
import { sql, eq, and, gte, lte,  } from 'drizzle-orm';

interface Props {
  params: {
    'template-slug': string
  }
}

function CreateContent(props: Props) {
  const [generateContent, setGenerateContent] = useState<string>('')
  const selectedTemplate = Templates.find((item) => item?.slug === props.params['template-slug'])
  const [loading, setLoading] = useState(false)
  const { user } = useUser()
  const [totalUsage, setTotalUsage] = useContext(TotalUsageContext)
  const router = useRouter()

  if (!selectedTemplate) {
    return <div>Template not found</div>
  }

  const GenerativeAIContent = async (formData: any) => {

    setLoading(true)
    const selectedPrompt = selectedTemplate.aiPrompt
    const FinalAiPrompt = JSON.stringify(formData) + ", " + selectedPrompt
    const result = await chatSession.sendMessage(FinalAiPrompt)
    const aiResponse = result.response.text()
    const numberOfWords = aiResponse.split(/\s+/).length
    setGenerateContent(aiResponse)
    console.log('first', result.response.text())
    await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, aiResponse, numberOfWords)
    setLoading(false)
  }

  const SaveInDb = async (formData: any, slug: any, aiResp: string, numberOfWord: number) => {
    const currentDate = new Date().toISOString(); // Convert Date object to ISO string
    await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress || '',
      createdAt: currentDate,
      numberOfWords: numberOfWord
    });
  
    setTotalUsage(prevUsage => prevUsage + numberOfWord);
    console.log('Data saved successfully');
  };
  
  const getStartAndEndOfDay = () => {
    const now = new Date();
    const startOfDay = new Date(now.setHours(0, 0, 0, 0)).toISOString();
    const endOfDay = new Date(now.setHours(23, 59, 59, 999)).toISOString();
    return { startOfDay, endOfDay };
  };

  const checkWordLimit = async () => {
    const { startOfDay, endOfDay } = getStartAndEndOfDay();
    const userId = user?.primaryEmailAddress?.emailAddress || '';
  
    // Query to get the total word count for the current day
    const results = await db.select()
    .from(AIOutput)
    .where(
      and(
        eq(AIOutput.createdBy, userId),
        gte(AIOutput.createdAt, startOfDay),
        lte(AIOutput.createdAt, endOfDay)
      )
    );
    // Sum up the total number of words
    const totalWords = results.reduce((sum: any, record: { numberOfWords: any }) => sum + record.numberOfWords, 0);
  
    return totalWords < 5000;
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
    <div className='p-5'>
      <Link href='/dashboard'>
        <Button className='flex items-center w-[84px] mt-4'>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection 
          selectedTemplate={selectedTemplate} 
          userFormInput={GenerativeAIContent} 
          loading={loading} 
          totalUsage={totalUsage} 
        />
        <div className='col-span-2'>
          <OutputSection content={generateContent} />
        </div>
      </div>
    </div></>

  )
}

export default CreateContent

