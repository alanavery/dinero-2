import Link from 'next/link';
import { findData } from '@/helpers/mongodb';

const Users = async () => {
  const users = await findData('users');

  return (
    <main>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <Link href={`/users/${user._id}`} key={user._id}>
            {user.firstName}
          </Link>
        );
      })}
    </main>
  );
};

export default Users;
