'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-orange-500 text-xl font-bold'>
          AlgoSmith
        </Link>
        <div>
          <Link href='/' className='text-white mr-4'>
            Home
          </Link>
          {user && (
            <Link href='/dashboard' className='text-white mr-4'>
              Dashboard
            </Link>
          )}
          {isDevelopment && (
            <Link
              href='/dev-debug-dashboard'
              className={`font-bold mr-4 ${
                user
                  ? 'text-green-400 hover:text-green-300'
                  : 'text-red-400 hover:text-red-300'
              }`}
            >
              Dev Debug
            </Link>
          )}
          {!isLoading && (
            <>
              {user ? (
                <a href='/api/auth/logout' className='text-white'>
                  Logout
                </a>
              ) : (
                <a href='/api/auth/login' className='text-white'>
                  Login
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
