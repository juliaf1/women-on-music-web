import { FcMusic } from 'react-icons/fc';

import styles from './styles.module.scss';

interface StartPlaylistButtonProps {
  title: string;
}

export function StartPlaylistButton({ title }: StartPlaylistButtonProps) {
  return(
    <button
      className={styles.startPlaylistButton}
    >
      <FcMusic className={styles.icon} />
      { title }
    </button>
  )
};