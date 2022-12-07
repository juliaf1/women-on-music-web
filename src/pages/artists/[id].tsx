import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Artist as ArtistProps, artists } from '../../utils/artists';

interface Props {
  artist: ArtistProps
}

import styles from './artist.module.scss';

export default function Artist({ artist }: Props) {
  return(
    <>
      <Head>
        <title>{`${artist.name} | Música Brasileira` }</title>
      </Head>

      <h1>{artist.name}</h1>
      <img src={artist.image_url} alt="" />
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