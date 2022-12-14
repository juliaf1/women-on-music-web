import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { BsArrowBarRight } from 'react-icons/bs';

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
        <div className={styles.artists}>
          { artists.map(artist => (
              <Link href={`/artistas/${artist.id}`} key={artist.id}>
                <a id={artist.id}>
                  <div>
                    <img src={artist.image_url} />
                    <h2>{artist.name}</h2>
                  </div>
                  <BsArrowBarRight size={25} className={styles.icon} />
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