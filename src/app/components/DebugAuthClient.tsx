'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function DebugAuthClient() {
  const { user, error, isLoading } = useUser();
  const SPECIAL_USERS: Record<string, string> = {
    'kim.cuomo@gmail.com': 'https://media1.tenor.com/m/9y_Eb4kdG20AAAAC/michael-office.gif',
    'piero914@gmail.com': 'https://media1.tenor.com/m/9y_Eb4kdG20AAAAC/michael-office.gif',
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    const imgSrc =
      user.email && SPECIAL_USERS[user.email]
        ? 'https://media1.tenor.com/m/9y_Eb4kdG20AAAAC/michael-office.gif'
        : user.picture ?? '';
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Auth Debug</h2>
        <img
          src={imgSrc}
          alt={user.name ?? ''}
          className="mb-2"
        />
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
        <p>Nickname: {user.nickname}</p>
        <p>Email Verified: {user.email_verified ? 'Yes' : 'No'}</p>
        <pre className="bg-gray-100 p-2 rounded mt-2">{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  } else {
    return <div>Not signed in</div>;
  }
}
