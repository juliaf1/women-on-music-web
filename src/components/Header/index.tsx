import { ActiveLink } from '../ActiveLink';
import { StartPlaylistButton } from '../StartPlaylistButton';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo-small-color.png" alt="Música Brasileira" />

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Início</a>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
        </nav>

        <StartPlaylistButton title="Gerar Playlist" />
      </div>
    </header>
  )
};