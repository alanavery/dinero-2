'use client';

const AddUser = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName } = event.target;
    const formData = { firstName: firstName.value };
    try {
      const response = await fetch('/api/users', {
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
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" name="firstName" type="text" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default AddUser;
