'use client'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { copyToClipboard } from '@/constant'

interface OutputSectionProps {
  content: string
}

function OutputSection({ content }: OutputSectionProps) {
  const editorRef = useRef<any>(null)

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance()
    if (editorInstance && content) {
      editorInstance.setMarkdown(content)
    }
  }, [content])

  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2>Your Result</h2>
        <Button className='flex items-center'>
          <Copy className='mr-2'    onClick={()=>copyToClipboard(content)}/> Copy 
        </Button>
      </div>
      <Editor
        ref={editorRef}
        previewStyle='vertical'
        height='600px'
        initialEditType='wysiwyg'
        initialValue='Your Result Will Appear Here'
        useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection
