"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField, Template } from '@/type'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'
import moment from 'moment'

interface Props {
  selectedTemplate?: Template | undefined | any
  userFormInput: (data: any) => void
  loading: boolean
  totalUsage:any
}

function FormSection({ selectedTemplate, userFormInput, loading , totalUsage }: Props) {
  const [formData, setFormData] = useState<any>(() => {
    const defaultFormData: any = {}
    selectedTemplate?.form.forEach((field: FormField) => {
      if (field.options && field.options.length > 0) {
        defaultFormData[field.name] = field.options[0]
      }
    })
    return defaultFormData
  })

  if (!selectedTemplate) {
    return <div>No template selected</div>
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    userFormInput(formData)
  }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  useEffect(() => {
    
    if (totalUsage> 5000) {
      const tomorrow = moment().add(1, 'day').startOf('day');
      const intervalId = setInterval(() => {
        const now = moment();
        const duration = moment.duration(tomorrow.diff(now));
        setTimeLeft(`${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`);
      }, 1000);
   
}}, [totalUsage]);
 

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      <Image src={selectedTemplate &&selectedTemplate?.icon} width={70} height={70} alt={`${selectedTemplate.name} icon`} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate.name}</h2>
      <p className='text-gray-700 text-sm'>{selectedTemplate.desc}</p>
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate.form.map((item: FormField, index: number) => (
          <div key={index} className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>{item.label}</label>
            {item.options ? (
              <select
                id={item.name}
                name={item.name}
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-4 px-3'
                value={formData[item.name]}
                onChange={handleInputChange}
              >
                {item.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : item.field === 'input' ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === 'textarea' ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
      <Button className='w-full py-6 px-4' type='submit' >
  {loading && <Loader2Icon className='animate-spin' />}
  { 'Generate Content'}
</Button>
      </form>
    </div>
  )
}

export default FormSection
