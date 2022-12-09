import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ArtistDetail } from '../../components/ArtistDetail';
import { ArtistOverview } from '../../components/ArtistOverview';

import { Artist as ArtistProps, artists } from '../../utils/artists';

import styles from './artist.module.scss';

interface Props {
  artist: ArtistProps;
}

export default function Artist({ artist }: Props) {
  return(
    <>
      <Head>
        <title>{`${artist.name} | Música Brasileira` }</title>
      </Head>

      <div className={styles.degradeBackground} />

      <div className={styles.container}>
        <ArtistOverview artist={artist}/>
        <ArtistDetail artist={artist} />
      </div>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { id } = params;
  let artist = artists.find(artist => artist.id == id );

  return {
    props: {
      artist
    }
  }
};