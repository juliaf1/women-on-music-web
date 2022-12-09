import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export function AboutBanner() {
  return(
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>Sobre o projeto</span>

        <h2>E se a <span>história da música brasileira</span> fosse contada por mulheres? </h2>
        <p>
          Música Brasileira é um projeto desenvolvido como TCC do curso de Estudos de Mídia na Universidade Federal Fluminense em 2022.
          <br/>
          Com o objetivo de celebrar as mulheres que fazem música no Brasil, o projeto coleciona um acervo de artistas que transitam por diferentes gêneros musicais e instrumentos.
          <br/>
          A proposta do website é apresentar essas mulheres através das histórias que elas próprias contaram no programa Um Café Lá Em Casa - sendo um convite para descobrir não só o som, mas também as narrativas que compõe esse universo vasto, polirrítmico, descompassado e múltiplo que é a música brasileira.
        </p>

        <a href="https://github.com/juliaf1/women-on-music-web" className={styles.link} target="blank">
          <FaGithub color="#db3a34" size={25} className={styles.icon} />
          Acesse o projeto no Github
        </a>
      </section>
    </main>
  )
};