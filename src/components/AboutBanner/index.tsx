import { StartPlaylistButton } from '../StartPlaylistButton';

import styles from './styles.module.scss';

export function AboutBanner() {
  return(
    <main className={styles.contentContainer} id="about">
      <section className={styles.hero}>
        <span>Sobre o projeto</span>

        <h2>E se a <span>história da música brasileira</span> fosse contada por mulheres? </h2>
        <p>
          Música Brasileira é um projeto desenvolvido como TCC do curso de Estudos de Mídia na Universidade Federal Fluminense em 2022.
          
          A proposta do website é apresentar diversas artistas brasileiras e sua musicalidade - através das histórias que elas próprias contaram no programa Um Café Lá Em Casa.
          É um convite para descobrir não só o som, mas também as possíveis narrativas que compõe o universo vasto, polirrítmico, descompassado e múltiplo que é o da música brasileira. Por meio de vozes femininas, claro.
        </p>

        <StartPlaylistButton />
      </section>
    </main>
  )
};