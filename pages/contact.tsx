import Head from 'next/head';
import ContactPage from '../components/organisms/ContactPage/ContactPage';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Page containing contact form and information for Michael Ballos"
        />
      </Head>
      <ContactPage />
    </>
  );
}