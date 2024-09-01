"use client";
import { useParams } from "next/navigation";
import { useBlog } from "../../hooks/";
import { FullBlog } from "@/components/FullBlog";

export default function Page() {
    const { id } = useParams();

    // Ensure `id` is a string
    const blogId = Array.isArray(id) ? id[0] : id;
    console.log(blogId)

    const { loading, blog } = useBlog({
        id: blogId || ""
    });

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (!blog) {
        return (
            <div>
                Blog not found.
            </div>
        );
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
}
