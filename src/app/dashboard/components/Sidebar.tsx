import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className='flex'>
      <nav className='w-64 min-h-screen bg-gray-100 p-4'>
        <h2 className='text-xl font-bold mb-4'>Dashboard</h2>
        <ul>
          <li>
            <Link href='/dashboard'>Overview</Link>
          </li>
          <li>
            <Link href='/dashboard/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/dashboard/settings'>Settings</Link>
          </li>
        </ul>
      </nav>
      <main className='flex-grow p-4'></main>
    </section>
  );
};

export default Sidebar;
