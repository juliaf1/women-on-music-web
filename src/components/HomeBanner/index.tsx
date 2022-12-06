import { StartPlaylistButton } from '../StartPlaylistButton';

import styles from './styles.module.scss';

export function HomeBanner() {
  return(
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>Em parceria com Um Café Lá Em Casa</span>

        <h1>Música brasileira, <span>no feminino</span></h1>
        <p>
          Descubra a música brasileira com histórias contadas por mulheres.
        </p>

        <StartPlaylistButton />
      </section>

      <img src="/images/avatar.svg" alt="" />
    </main>
  )
};