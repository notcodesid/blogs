import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profie from "@/public/x-pfp.png"

export function Appbar() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-opacity-30 backdrop-blur-md z-20">
      <div className="container mx-auto px-4 py-3 flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/notcodesid/blogs" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>

          <span>
                    <Link href={"https://x.com/notcodesid"}  target="_blank">
                    <Image className="rounded-full" src={profie} alt="x-pfp" height={30}  width={30}/>
                    </Link>
                 </span>
        </div>
      </div>
    </header>
    )
}