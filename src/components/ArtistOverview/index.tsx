import { IoMdArrowBack } from 'react-icons/io';
import { BsSpotify, BsInstagram } from 'react-icons/bs';
import { BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';

import { Artist as ArtistProps } from '../../utils/artists';

import styles from './styles.module.scss';

interface Props {
  artist: ArtistProps;
}

export function ArtistOverview({ artist }: Props) {
  return(
    <div className={styles.container}>
      <Link href="/artistas">
        <a className={styles.backLink}>
          <IoMdArrowBack size={18} className={styles.icon} />
          Voltar para playlist
        </a>
      </Link>

      <div className={styles.contentContainer}>
        <img src={artist.image_url} />
        <h1>{artist.name}</h1>
        <span>{artist.city}</span>

        <div className={styles.socials}>
          <a href={artist.socials.spotify} className={styles.link} target="blank">
            <BsSpotify size={18} className={styles.icon} />
          </a>

          <a href={artist.socials.instagram} className={styles.link} target="blank">
            <BsInstagram size={18} className={styles.icon} />
          </a>

          <a href={artist.socials.website} className={styles.link} target="blank">
            <BsLink45Deg size={20} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  )
};