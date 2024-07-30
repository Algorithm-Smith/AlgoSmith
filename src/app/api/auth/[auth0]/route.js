// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

const handler = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard',
  }),
});

export const GET = handler;
export const POST = handler;
