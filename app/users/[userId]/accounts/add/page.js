'use client';

import { useRouter } from 'next/navigation';
import FormTemplate from '@/app/components/form';

const AddAccount = ({ params }) => {
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (result.insertedId) {
        router.push(`/users/${params.userId}/accounts`);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Add Account</h1>

      <FormTemplate
        fields={[
          {
            id: 'name',
            label: 'Name',
          },
          {
            id: 'startingBalance',
            label: 'Starting Balance',
            type: 'currency',
          },
          {
            id: 'creditAccount',
            label: 'Credit Account?',
            type: 'boolean',
          },
          {
            id: 'creditLimit',
            label: 'Credit Limit',
            type: 'currency',
          },
        ]}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default AddAccount;
