import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/users">Users</Link>
    </main>
  );
};

export default Home;
