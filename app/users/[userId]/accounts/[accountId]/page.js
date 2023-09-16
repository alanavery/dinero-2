import Link from 'next/link';
import { ObjectId } from 'mongodb';
import { findData } from '@/helpers/mongodb';

const Account = async ({ params }) => {
  const data = await findData([
    {
      collectionName: 'accounts',
      query: { _id: new ObjectId(params.accountId) },
      singleDocument: true,
    },
  ]);

  return (
    <main>
      <h1>{data.accounts.name}</h1>
    </main>
  );
};

export default Account;
