import Link from 'next/link';
import { ObjectId } from 'mongodb';
import { findData } from '@/app/helpers/mongodb';

const User = async ({ params }) => {
  const data = await findData([
    {
      collectionName: 'users',
      query: { _id: new ObjectId(params.userId) },
      singleDocument: true,
    },
  ]);

  return (
    <main>
      <h1>{`${data.users.firstName}’s Dashboard`}</h1>
      <Link href={`/users/${params.userId}/accounts`}>My Accounts</Link>
    </main>
  );
};

export default User;
