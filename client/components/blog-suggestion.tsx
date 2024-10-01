"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LightbulbIcon, XIcon } from "lucide-react"
import axios from 'axios'
import { BACKEND_URL } from '@/config'

export default function BlogSuggestion() {
  const [isOpen, setIsOpen] = useState(false)
  const [suggestion, setSuggestion] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try{
        axios.post(`${BACKEND_URL}suggestion`, {
            topic: suggestion
          })
        setSuggestion('')
        setIsOpen(false)
    }
    catch(err){
        console.error(err)
    }
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed bottom-4 right-4 rounded-full p-4 bg-gray-700 hover:bg-gray-600 z-50"
              size="icon"
            >
              <LightbulbIcon className="h-6 w-6 text-gray-300" />
              <span className="sr-only">Suggest a blog topic</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-gray-800 text-gray-100 border-gray-700">
            <p>Suggest topic to Sidharth</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-100">Suggest a Blog Topic</h2>
              <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
              <Textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Suggest Sidharth to write the next blog about..."
                className="mb-4 bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"
                rows={4}
              />
              <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100">
                Send Suggestion
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}