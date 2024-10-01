import { DotPattern } from "@/components/magicui/dot-pattern"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"
import BlogList from "./blog/page"
import { Appbar } from "@/components/appbar"
import BlogSuggestion from "@/components/blog-suggestion"

export default function Component() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col bg-[#0f172a] text-gray-100 relative">
        <Appbar />
        
        <div className="container px-4 md:px-6 flex-grow flex flex-col justify-center items-center relative z-10 pt-16">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h1 className="text-[#d4d4d8] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Latest Blog Posts
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Exploring code, sharing knowledge, and building the future. 
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search blog posts..."
                  type="text"
                />
                <Button type="submit" className="bg-gray-700 hover:bg-gray-600">
                  Search
                </Button>
              </form>
            </div>
          </div>

          {/* Blog list */}
          <BlogList />
        </div>

        {/* Blog Suggestion Component */}
        <BlogSuggestion />
      </section>
    </>
  )
}