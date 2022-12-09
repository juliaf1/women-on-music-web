import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from './styles.module.scss';

import { Artist, artists } from '../../utils/artists';

interface PlaylistProps {
  artists: Array<Artist>;
};

export default function Artists({ artists }: PlaylistProps) {
  return (
    <>
      <Head>
        <title>Artistas | Música Brasileira</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          { artists.map(artist => (
              <Link href={`/artistas/${artist.id}`} key={artist.id}>
                <a>
                  <time>{artist.city}</time>
                  <h3>{artist.name}</h3>
                  <p>{artist.briefing}</p>
                </a>
              </Link>
          )) }
        </div>
      </main>
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      artists
    }
  }
};