import { Hono } from 'hono';
import { blogRouter } from './router/blogRouter';

const app = new Hono();

app.get('/', (c) => {
  return c.text('hello hono');
});

app.route('/blog', blogRouter);

export default app;
