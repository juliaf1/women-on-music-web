import { FcMusic } from 'react-icons/fc';

import styles from './styles.module.scss';

export function StartPlaylistButton() {
  return(
    <button
      className={styles.startPlaylistButton}
    >
      <FcMusic className={styles.icon} />
      Gerar Playlist
    </button>
  )
};