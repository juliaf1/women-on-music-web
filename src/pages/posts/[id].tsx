import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from './post.module.scss';

interface PostProps {
  post: {
    id: string;
    title: string;
    content: string;
    created_at: string;
  }
};

export default function Post({ post }: PostProps) {
  return(
    <>
      <Head>
        <title>{`${post.title} | ig.news` }</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.created_at}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  // Request API/DB for post with that slug/id

  return {
    props: {
      post: {
        id: 0,
        title: 'Creating a Next application with TS',
        content: '<p>In this guide, you will learn how to create a <a href="/">Next</a> application with TypeScript from scratch... Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.</p>',
        created_at: 'Sunday, October 02, 2022',
      }
    }
  }
};