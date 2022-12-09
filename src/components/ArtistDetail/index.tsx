import { Artist as ArtistProps } from '../../utils/artists';

import styles from './styles.module.scss';

export function ArtistDetail({ artist }: ArtistProps) {
  return(
    <div>


      <h1>{artist.name}</h1>
      <img src={artist.image_url} alt="" />

    </div>
  )
};