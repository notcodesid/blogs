import { Blog } from "@/app/hooks/index"

export const FullBlog = ({ blog }: {blog: Blog}) => {

    return (
        <>
        <div>{blog.title}</div>
        {/* <div>{blog.date}</div> */}
        {/* <div>{ `${blog.readingTime}` }</div> */}
        <div>{blog.content}</div>
        </>
    )

}