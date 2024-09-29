"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from 'next/navigation';
import { useBlogs } from "../hooks";
import { BlogCard } from "@/components/blogCard"
import CircularLoader from "@/components/LoadingBar";


export default function BlogList() {
  const router = useRouter();

  const { loading, blogs } = useBlogs();

  if(loading) {
    return (
      <>
     <div className="min-h-screenflex items-center justify-center">
      <CircularLoader size={60} percentage={75} />
    </div>
      </>
    )
  }

  return (
    <section>
        
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
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