import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from './artist.module.scss';

interface ArtistProps {
  artist: {
    id: string;
    name: string;
    briefing: string;
    city: string;
    video_url: string;
    title: string;
    content: string;
    socials: {
      spotify: string;
      website: string;
      instagram: string;
    }
  }
};

export default function Artist({ artist }: ArtistProps) {
  return(
    <>
      <Head>
        <title>{`${artist.title} | Música Brasileira` }</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.artist}>
          <h1>{artist.title}</h1>
          <time>{artist.city}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: artist.content }}
          />
        </article>
      </main>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  return {
    props: {
      artist: {
        id: 0,
        title: 'Creating a Next application with TS',
        content: '<p>In this guide, you will learn how to create a <a href="/">Next</a> application with TypeScript from scratch... Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.</p>',
        created_at: 'Sunday, October 02, 2022',
      }
    }
  }
};