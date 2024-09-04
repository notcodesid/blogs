import { Blog } from "@/app/hooks/index"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation';


function processContent(content: string) {
  const sentences = content.split(/(?<=[.!?])\s+/);
  return sentences.join('\n\n');
}

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const router = useRouter();
    const processedContent = processContent(blog.content);
    
    return (
        <>
        <article className="py-12 h-full bg-gray-900 text-gray-100">
            <div className="container mx-auto max-w-3xl px-4">
            <Button
                onClick={() => router.back()}
                variant="ghost"
                className="mb-4 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to blogs
            </Button>
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">
                        {blog.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                            <CalendarDays className="w-4 h-4 mr-2" />
                            <span>{blog.date.slice(0, 10)}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{`${blog.readingTime}`} min read </span>
                        </div>
                    </div>
                </header>
                <div className="prose prose-invert">
                    <p className="text-gray-300 whitespace-pre-wrap">
                        {processedContent}
                    </p>
                </div>
            </div>
        </article>
         
        {/* <DotPattern className={cn(
  "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
)} /> */}
    </>
    )
}