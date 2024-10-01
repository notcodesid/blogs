import { Hono } from 'hono';
import { blogRouter } from './router/blogRouter';
import { cors } from 'hono/cors'
import { suggestionRouter } from './router/suggestionRouter';

const app = new Hono();
app.use('/*', cors())


app.get('/', (c) => {
  return c.text('hello hono');
});

app.route('/blog', blogRouter);
app.route('/suggestion' , suggestionRouter)

export default app;
