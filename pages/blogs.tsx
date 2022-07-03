import Head from "next/head";
import BlogsPage from '../components/organisms/BlogsPage/BlogsPage';

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Page containing Blogs by Michael Ballos"
        />
      </Head>
      <BlogsPage />
    </>

  );
}