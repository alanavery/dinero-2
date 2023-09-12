import Link from 'next/link';
import { ObjectId } from 'mongodb';
import { findData } from '@/helpers/mongodb';
import Card from '@/components/card';
import Button from '@/components/button';

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

      <Card>
        {data.accounts.map((account) => {
          return (
            <Link href={`/users/${params.userId}/accounts/${account._id}`} key={account._id}>
              <div>{account.name}</div>
            </Link>
          );
        })}
      </Card>

      <Button href={`/users/${params.userId}/accounts/add`}>Add Account</Button>
    </main>
  );
};

export default Accounts;
