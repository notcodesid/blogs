'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function CreateBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ title, content })
    // Reset form after submission
    setTitle('')
    setContent('')
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [content])

  return (
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
  )
}