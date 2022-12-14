import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import { StartPlaylistButton } from '../StartPlaylistButton';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/"><img src="/images/logo-small-color.png" alt="Música Brasileira" /></Link>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Início</a>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink href="/artistas" activeClassName={styles.active}>
            <a>Artistas</a>
          </ActiveLink>
        </nav>

        <StartPlaylistButton title="Gerar Playlist" />
      </div>
    </header>
  )
};