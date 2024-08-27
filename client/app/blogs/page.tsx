import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build a blog with Next.js and Tailwind CSS. We'll cover the basics of setting up a project and creating your first pages.",
    date: "2023-06-01",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    excerpt: "Dive deep into React Hooks and how they can simplify your code. We'll explore useState, useEffect, and custom hooks.",
    date: "2023-05-15",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Power of TypeScript",
    excerpt: "Discover how TypeScript can improve your JavaScript development. We'll look at type annotations, interfaces, and generics.",
    date: "2023-05-01",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Mastering CSS Grid",
    excerpt: "Learn how to create complex layouts with CSS Grid. We'll cover grid templates, areas, and responsive design techniques.",
    date: "2023-04-20",
    readTime: "7 min read",
  },
]

export default function BlogList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest Blog Posts</h2>
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                  <Clock className="ml-4 mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button asChild variant="ghost" className="text-gray-300 hover:text-gray-100">
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}