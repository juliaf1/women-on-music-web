import { FiLink2 } from 'react-icons/fi';

import styles from './styles.module.scss';

export function AboutDetailBanner() {
  return(
    <main className={styles.contentContainer}>
      <img src="images/blur.png" />
  
      <section className={styles.hero}>
        <span>O protagonismo feminino no universo musical</span>

        <h2>Aonde estão as mulheres da música?</h2>
        <p>
          Ainda que mulheres sempre tenham sido motor artístico potente, a sua representatividade na indústria musical é limitada e vive solavancos.
          <br/><br/>
          Um relatório da UBC de 2021 escancara o longo caminho que a indústria musical ainda precisa percorrer para se tornar um espaço representativo da potência musical feminina:
          <br/> - Apenas 4 dos 100 autores de maior rendimento são mulheres.
          <br/> - Mulheres representam 9% do total de rendimentos.
          <br/> - Mulheres compõe 15% do quadro de associados.
        </p>

        <div className={styles.link}>
          <a href="https://www.ubc.org.br/anexos/publicacoes/Por-Elas-Que-Fazem-a-Musica-2021.pdf" target="blank">
            <FiLink2 color="#db3a34" size={25} className={styles.icon} />
          </a>

          <p>Acesse o relatório da UBC</p>
        </div>
      </section>
    </main>
  )
};