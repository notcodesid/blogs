'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function CreateBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ title, content })
    // Reset form after submission
    setTitle('')
    setContent('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full bg-transparent text-4xl font-light text-gray-300 placeholder-gray-500 focus:outline-none"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell your story..."
          className="w-full bg-transparent text-xl text-gray-300 placeholder-gray-500 focus:outline-none min-h-[calc(100vh-200px)] resize-none"
        />
        <div className="fixed top-4 right-4">
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
            Publish
          </Button>
        </div>
      </form>
    </div>
  )
}