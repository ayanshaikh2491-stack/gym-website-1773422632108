import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Gym Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>We are a professional gym providing top-notch equipment and facilities.</p>
      </main>
      <Footer />
    </div>
  );
}