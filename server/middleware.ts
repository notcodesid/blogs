export default async function basicAuth(c: any, next: any) {
    const authHeader = c.req.header('Authorization');

    if (authHeader && authHeader.startsWith('Basic ')) {
        const base64Credentials = authHeader.split(' ')[1];
        const credentials = atob(base64Credentials); // Use atob for base64 decoding in Hono
        const [username, password] = credentials.split(':');

        if (username === c.env.ADMIN_USERNAME && password === c.env.ADMIN_PASSWORD) {
            return next();
        }
    }

    c.header('WWW-Authenticate', 'Basic realm="Secure Area"');
    return c.text('Authentication required', 401);
}