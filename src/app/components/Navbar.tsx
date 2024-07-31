'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-orange-500 text-xl font-bold mr-6"
          >
            AlgoSmith
          </Link>
          {user && (
            <span className="text-gray-400 text-sm">
              Signed in as:{' '}
              <span
                className="text-white font-medium hover:text-orange-300 transition-colors duration-200 cursor-pointer flex items-center group"
                title="To view personal data AlgoSmith has access to  ➡️ /api/auth/me"
              >
                {user.email}
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">👁️</span>
              </span>
            </span>
          )}
        </div>
        <div>
          <Link
            href="/"
            className="text-white mr-4"
          >
            Home
          </Link>
          {user && (
            <Link
              href="/dashboard"
              className="text-white mr-4"
            >
              Dashboard
            </Link>
          )}
          {isDevelopment && (
            <Link
              href="/dev-debug-dashboard"
              className={`font-bold mr-4 ${
                user ? 'text-green-400 hover:text-green-300' : 'text-red-400 hover:text-red-300'
              }`}
            >
              Dev Debug
            </Link>
          )}
          {!isLoading && (
            <>
              {user ? (
                <a
                  href="/api/auth/logout"
                  className="text-white"
                >
                  Logout
                </a>
              ) : (
                <a
                  href="/api/auth/login"
                  className="text-white"
                >
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
