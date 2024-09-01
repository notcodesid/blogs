import { ArrowRight, CalendarDays, Clock, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

interface BlogCardProps {
    title: string;
    content: string;
    publishedDate: string;
    readingTime: Number
    id: number;
}

export function BlogCard({title , content , publishedDate , readingTime, id} : BlogCardProps){
    return (
        <>
            <Card key={id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">{content.slice(0, 100) + "..."} </p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  <span>{publishedDate.slice(0, 10)}</span>
                  <Clock className="ml-4 mr-1 h-4 w-4" />
                  <span>{`${readingTime}`} min </span>
                </div>
                <Button asChild variant="ghost" className="text-gray-300 hover:text-gray-100">
                  <Link href={`/blog/${id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

        </>
    )
}