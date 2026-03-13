import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Gym Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any questions or concerns.</p>
      </main>
      <Footer />
    </div>
  );
}