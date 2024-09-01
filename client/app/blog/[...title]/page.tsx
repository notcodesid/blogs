"use client";

import { useParams } from 'next/navigation';
import { useBlog } from "../../hooks/index";
import { FullBlog } from "@/components/FullBlog";

export default function Page() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure `id` is a string

    const { loading, blog } = useBlog({
        id: id || "" // Pass the `id` as a string
    });

    console.log(id);

    if (loading || !blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
}
