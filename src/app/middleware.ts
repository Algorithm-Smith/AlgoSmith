import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
};

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}
