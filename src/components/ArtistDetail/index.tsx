import { IoMdArrowBack } from 'react-icons/io';

import { Artist as ArtistProps } from '../../utils/artists';

import styles from './styles.module.scss';

interface Props {
  artist: ArtistProps;
}

export function ArtistDetail({ artist }: Props) {
  return(
    <div className={styles.container}>
      <img src={artist.image_url} alt="" />
      <h1>{artist.name}</h1>
    </div>
  )
};