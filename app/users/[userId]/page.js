import Link from 'next/link';
import { ObjectId } from 'mongodb';
import { findData } from '@/helpers/mongodb';

const User = async ({ params }) => {
  const user = await findData('users', { _id: new ObjectId(params.userId) });

  return (
    <main>
      <h1>{`${user.firstName}’s Accounts`}</h1>
      <Link href="/accounts/add">Add Account</Link>
    </main>
  );
};

export default User;
