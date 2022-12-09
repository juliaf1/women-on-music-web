import { IoMdArrowBack } from 'react-icons/io';

import { Artist as ArtistProps } from '../../utils/artists';

import styles from './styles.module.scss';

interface Props {
  artist: ArtistProps;
}

export function ArtistOverview({ artist }: Props) {
  return(
    <div className={styles.container}>
          <a href="/artistas" className={styles.link}>
            <IoMdArrowBack size={18} className={styles.icon} />
            Voltar para playlist
          </a>

      <img src={artist.image_url} alt="" />
      <h1>{artist.name}</h1>
    </div>
  )
};