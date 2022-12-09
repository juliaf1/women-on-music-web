import Link from 'next/link';
import { FcMusic } from 'react-icons/fc';

import styles from './styles.module.scss';

interface StartPlaylistButtonProps {
  title: string;
}

export function StartPlaylistButton({ title }: StartPlaylistButtonProps) {
  return(
    <Link href="artistas">
      <button
        className={styles.startPlaylistButton}
      >
        <FcMusic className={styles.icon} />
        { title }
      </button>
    </Link>
  )
};