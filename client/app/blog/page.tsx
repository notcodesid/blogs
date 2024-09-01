"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from 'next/navigation';
import { useBlogs } from "../hooks";
import { BlogCard } from "@/components/blogCard";


export default function BlogList() {
  const router = useRouter();

  const { loading, blogs } = useBlogs();

  if(loading) {
    return (
      <>
      loading
      </>
    )
  }

  return (
    <section className="w-full h-full py-12 bg-gray-900 text-gray-100">
        
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
      <Button 
        onClick={() => router.back()}
          variant="ghost" 
          className="mb-4 text-gray-300 hover:bg-gray-800 hover:text-gray-100"      
        >
          <ArrowLeft className="mr-2 h-4 w-4"  /> Back to Home
        </Button>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest Blog Posts</h2>
        <div className="space-y-10">

        {blogs.map(blog => <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          content={blog.content}
          publishedDate={blog.date} 
          readingTime={blog.readingTime}   
          />)}
        </div>
      </div>
    </section>
  )
}