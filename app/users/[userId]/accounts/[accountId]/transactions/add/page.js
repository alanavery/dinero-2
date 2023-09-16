'use client';

import { useRouter } from 'next/navigation';
import FormTemplate from '@/components/form';

const AddTransaction = ({ params }) => {
  const router = useRouter();

  const handleSubmit = async (values) => {
    console.log(values);
    // try {
    //   const response = await fetch('/api/accounts', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(values),
    //   });
    //   const result = await response.json();
    //   if (result.insertedId) {
    //     router.push(`/users/${params.userId}/accounts`);
    //   } else {
    //     console.log(result);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <main className="white">
      <h1>Add Transaction</h1>

      <FormTemplate
        fields={[
          {
            id: 'amount',
            label: 'Amount',
            type: 'currency',
          },
          {
            id: 'payee',
            label: 'Payee',
          },
          {
            id: 'date',
            label: 'Date',
            type: 'date',
          },
          {
            id: 'cleared',
            label: 'Cleared',
            type: 'boolean',
          },
          {
            id: 'split',
            label: 'Split',
            type: 'boolean',
          },
          {
            id: 'tag',
            label: 'Tag',
          },
        ]}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default AddTransaction;
