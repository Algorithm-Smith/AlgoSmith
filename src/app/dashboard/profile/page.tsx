'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <h2 className='text-xl font-semibold mb-2'>User Profile</h2>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
        <p>Nickname: {user.nickname}</p>
        <p>Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
      </div>
    );
  } else {
    return <div>Not signed in</div>;
  }
}
