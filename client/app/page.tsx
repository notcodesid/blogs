import { DotPattern } from "@/components/magicui/dot-pattern"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Home() {
  
  return (
    <>
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 relative">
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-[#d4d4d8] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to My Dev Journey
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
          <div className="space-x-4">
            <Button asChild variant="outline" className="bg-gray-700 hover:bg-gray-600">
              <Link href="/blogs">Read My Blog</Link>
            </Button>
            <Button asChild variant="outline" className="bg-gray-700 hover:bg-gray-600">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>

<DotPattern
className={cn(
  "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
)}
/>
</>


  )
}