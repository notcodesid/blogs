import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Blog {
    reading: Number;
    id: number
    title: string;
    content: string;
    date: string;
    readingTime : Number
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}blog/bulk`)
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, [])

    return {
        loading,
        blogs
    }
}