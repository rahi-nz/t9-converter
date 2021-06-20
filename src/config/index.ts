const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3030' : 'https://t9-deploy.vercel.app';
