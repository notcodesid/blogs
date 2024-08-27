"use client"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function AboutMe() {
  const router = useRouter();
  return (
    <>
      <section className="w-full h-screen py-12 md:py-24 lg:py-10 bg-gray-900 text-gray-100">

        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="mb-4 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">About Me</h1>
          <div className="space-y-8 ">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 ">Hey! I'm Siddharth.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">
                  I'm really into making websites. Been doing it for about a year now. I work with stuff like JavaScript, React, and Node.js. Love making sites that look good and work great!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />
    </>
  )
}