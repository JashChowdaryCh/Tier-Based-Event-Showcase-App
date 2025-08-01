import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/events', // 👈 protect this
    '/((?!_next|favicon.ico).*)',
  ],
};
