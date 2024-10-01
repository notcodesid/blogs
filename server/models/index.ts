import { z } from '@hono/zod-openapi'

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

export const suggestionSchema = z.object({
    topic:z.string().min(2).max(50)
})