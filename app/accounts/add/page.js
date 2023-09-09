'use client';

const AddAccount = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, startingBalance, creditAccount, creditLimit } = event.target;
    const formData = {
      name: name.value,
      startingBalance: startingBalance.value,
      creditAccount: creditAccount.value,
      creditLimit: creditLimit.value,
    };
    try {
      const response = await fetch('/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Add Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="starting-balance">Starting Balance</label>
          <input id="starting-balance" name="startingBalance" type="number" />
        </div>
        <div>
          <input id="credit-account" name="creditAccount" type="checkbox" />
          <label htmlFor="credit-account">Credit Account?</label>
        </div>
        <div>
          <label htmlFor="credit-limit">Credit Limit</label>
          <input id="credit-limit" name="creditLimit" type="number" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default AddAccount;
