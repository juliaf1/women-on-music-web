import { FcMusic } from 'react-icons/fc';

import styles from './styles.module.scss';

export function StartPlaylistButton() {
  return(
    <button
      className={styles.startPlaylistButton}
    >
      <FcMusic color="#eba417" className={styles.github} />
      Gerar Playlist
    </button>
  )
};