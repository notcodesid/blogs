import { Hono } from 'hono';
import { createBlogInput } from '../../models';
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success, data } = createBlogInput.safeParse(body);
    
    if (!success) {
        c.status(400);
        return c.json({
            message: "Inputs not correct"
        });
    }
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try {
        const wordsPerMinute = 150;
        const wordCount = data.content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        
        const blog = await prisma.blog.create({
            data: {
                title: data.title,
                content: data.content,
                readingTime: readingTime,
                // published and date will use default values
            },
        });
        
        return c.json({
            message: "Blog created successfully",
            blog: blog
        });
    } catch (error) {
        console.error("Error creating blog:", error);
        c.status(500);
        return c.json({
            message: "Error creating blog",
        });
    } finally {
        await prisma.$disconnect();
    }
});