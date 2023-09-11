import Link from 'next/link';
import { findData } from '@/app/helpers/mongodb';

const Users = async () => {
  const data = await findData([{ collectionName: 'users' }]);

  return (
    <main>
      <h1>Users</h1>
      {data.users.map((user) => {
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
