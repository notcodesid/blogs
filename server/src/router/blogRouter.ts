import { Hono } from 'hono';

export const blogRouter = new Hono();

blogRouter.post('/', (c) => {
  return c.text('done');
});

