import { Hono } from 'hono';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();

blogRouter.post('/', (c) => {
  return c.text('done');
});

