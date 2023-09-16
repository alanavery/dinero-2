import Link from 'next/link';
import { ObjectId } from 'mongodb';
import { findData } from '@/helpers/mongodb';
import Card from '@/components/card';
import Button from '@/components/button';

const Transactions = async ({ params }) => {
  const data = await findData([
    {
      collectionName: 'accounts',
      query: { _id: new ObjectId(params.accountId) },
      singleDocument: true,
    },
    {
      collectionName: 'transactions',
      query: { userId: params.accountId },
    },
  ]);

  return (
    <main>
      <h1>{data.accounts.name}</h1>

      {data.transactions.length > 0 && (
        <Card>
          {data.transactions.map((transaction) => {
            return (
              <Link href={`/users/${params.userId}/accounts/${params.accountId}/transactions/${transaction._id}`} key={transaction._id}>
                <div>Test</div>
              </Link>
            );
          })}
        </Card>
      )}

      <Button href={`/users/${params.userId}/accounts/${params.accountId}/transactions/add`}>Add Transaction</Button>
    </main>
  );
};

export default Transactions;
