import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-4 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
        
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
        
        <article className="bg-gray-800 rounded-lg overflow-hidden">
          <header className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>June 1, 2023</span>
              <Clock className="h-4 w-4 ml-4" />
              <span>5 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Getting Started with Next.js</h1>
            <p className="text-sm sm:text-base text-gray-400">
              Learn how to build a blog with Next.js and Tailwind CSS. We'll cover the basics 
              of setting up a project and creating your first pages.
            </p>
          </header>
          
          <div className="p-6 space-y-4 text-sm sm:text-base">
            <p>
              Next.js is a powerful framework that makes it easy to create fast, SEO-friendly
              React applications. In this tutorial, we'll walk through the process of setting
              up a new Next.js project and creating a simple blog layout.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-6">Why Choose Next.js?</h2>
            <p>
              Next.js offers several advantages for developers building modern web applications:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Server-side rendering out of the box</li>
              <li>Automatic code splitting for faster page loads</li>
              <li>Simple client-side routing</li>
              <li>API routes to build your API with serverless functions</li>
              <li>Easy customization and plugin support</li>
            </ul>
            <p>
              Whether you're building a personal blog or a complex web application, Next.js
              provides the tools and flexibility you need to create performant and scalable
              solutions.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}