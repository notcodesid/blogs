'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { BACKEND_URL } from '@/config'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'


export default function CreateBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try{

      axios.post(`${BACKEND_URL}blog` , {
        title,
        content
      } )
      console.log({ title, content })
      console.log("Blog publised sussfully")
      setTitle('')
      setContent('')
    }
    catch(err) {
      console.log("error while publising " , err)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [content])

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full bg-transparent text-4xl font-light text-gray-300 placeholder-gray-500 focus:outline-none"
        />
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell your story..."
          className="w-full bg-transparent text-xl text-gray-300 placeholder-gray-500 focus:outline-none resize-none overflow-hidden"
          />
        <div className="pt-6">
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
            Publish
          </Button>
        </div>
      </form>
    </div>

    <DotPattern
className={cn(
  "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
)}
/>
          </>
  )
}