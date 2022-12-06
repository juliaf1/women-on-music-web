import Lottie from 'react-lottie';
import animationData from '../../../public/lotties/blob.json';

import { StartPlaylistButton } from '../StartPlaylistButton';

import styles from './styles.module.scss';

export function HomeBanner() {
  return(
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>Em parceria com Um Café Lá Em Casa</span>

        <h1>Música brasileira,<br/><span>no feminino</span></h1>
        <p>
          Descubra a música brasileira com histórias contadas por mulheres.
        </p>

        <StartPlaylistButton />
      </section>

      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={500}
        width={500}
      />
    </main>
  )
};