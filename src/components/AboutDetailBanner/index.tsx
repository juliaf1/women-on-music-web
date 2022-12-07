import { FiLink2 } from 'react-icons/fi';

import styles from './styles.module.scss';

export function AboutDetailBanner() {
  return(
    <>
    <main className={styles.contentContainer}>
      <img src="images/blur.png" />
  
      <section className={styles.hero}>
        <span>O protagonismo feminino na música brasileira</span>

        <h2 className={styles.colorTitle}>Aonde estão as mulheres na música?</h2>
        <p>
          Ainda que mulheres sempre tenham sido motor artístico potente, a sua representatividade na indústria musical é limitada e vive solavancos.
          <br/><br/>
          Um relatório da UBC de 2021 escancara o longo caminho que a indústria musical ainda precisa percorrer para se tornar um espaço representativo da potência musical feminina:
          <br/> - Apenas 4 dos 100 autores de maior rendimento são mulheres.
          <br/> - Mulheres representam apenas 9% do total de rendimentos.
          <br/> - Mulheres compõe apenas 15% do quadro de associados.
        </p>

        <div className={styles.link}>
          <a href="https://www.ubc.org.br/anexos/publicacoes/Por-Elas-Que-Fazem-a-Musica-2021.pdf" target="blank">
            <FiLink2 color="#db3a34" size={25} className={styles.icon} />
          </a>

          <p>Acesse o relatório Por Elas Que Fazem a Música da UBC</p>
        </div>
      </section>
    </main>

    <main className={styles.contentContainer}>
  
      <section className={styles.hero}>
        <span>O protagonismo feminino na música pop</span>

        <h2>Quem <span>comanda a indústria</span> e os charts?</h2>
        <p>
          Um relatório da USC Annenberg analisou a indústria musical popular entre 2012 e 2021 e trouxe dados reveladores sobre discriminação de gênero e raça.
          <br/><br/>
          Após examinarem mil músicas populares, as pesquisadoras perceberam que entre os artistas:
          <br/> - Apenas 22% são mulheres.
          <br/> - Apenas 13% são mulheres compositoras.
          <br/> - Apenas 3% são mulheres produtoras.
          <br/> - Apenas 0,6% dos créditos foram para mulheres não brancas.
          <br/> - Apenas 13.6% dos nomeados ao Grammy foram mulheres.
        </p>

        <div className={styles.link}>
          <a href="https://assets.uscannenberg.org/docs/aii-inclusion-recording-studio-20220331.pdf" target="blank">
            <FiLink2 color="#db3a34" size={25} className={styles.icon} />
          </a>

          <p>Acesse o relatório Inclusion In The Recording Studio?</p>
        </div>
      </section>
    </main>
    </>
  )
};