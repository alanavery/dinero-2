import Link from 'next/link';
import { ObjectId } from 'mongodb';
import { findData } from '@/app/helpers/mongodb';

const Accounts = async ({ params }) => {
  const data = await findData([
    {
      collectionName: 'users',
      query: { _id: new ObjectId(params.userId) },
      singleDocument: true,
    },
    {
      collectionName: 'accounts',
      query: { userId: params.userId },
    },
  ]);

  return (
    <main>
      <h1>{`${data.users.firstName}’s Accounts`}</h1>
      <Link href={`/users/${params.userId}/accounts/add`}>Add Account</Link>
      {data.accounts.map((account) => {
        return (
          <Link href={`/users/${params.userId}/accounts/${account._id}`} key={account._id}>
            {account.name}
          </Link>
        );
      })}
    </main>
  );
};

export default Accounts;
