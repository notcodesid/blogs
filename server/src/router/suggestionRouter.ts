import { Hono } from 'hono';
import { suggestionSchema } from '../../models';
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const suggestionRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();


suggestionRouter.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
        const { success, data } = suggestionSchema.safeParse(body);

        if (!success) {
            c.status(400);
            return c.json({
                message: "Inputs not correct",
            });
        }

    try {
        const topic = await prisma.topic.create({
            data : {
                Topic:data.topic
            }
        })
        return c.json({
            message: "Suggestion created successfully",
            topic: topic
        });
    } catch (err) {
        console.error("Server error:", err);
        c.status(500);
        return c.json({
            message: "Internal server error",
        });
    }
});