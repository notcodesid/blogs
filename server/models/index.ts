import { z } from '@hono/zod-openapi'

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})