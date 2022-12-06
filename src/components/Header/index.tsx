import { ActiveLink } from '../ActiveLink';
import { StartPlaylistButton } from '../StartPlaylistButton';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Início</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
        </nav>

        <StartPlaylistButton />
      </div>
    </header>
  )
};