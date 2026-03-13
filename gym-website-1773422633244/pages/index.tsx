import Head from 'next/head';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to Gym Website</h1>
        <p>Here you can find information about our gym and join our community.</p>
      </main>
    </div>
  );
}