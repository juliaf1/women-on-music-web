import { FiLink2 } from 'react-icons/fi';
import Lottie from 'react-lottie';

import animationYellowData from '../../../public/lotties/yellow-blob.json';

import styles from './styles.module.scss';
import { StartPlaylistButton } from '../StartPlaylistButton';

export function AboutDetailSections() {
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
      <div className={styles.lottie}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationYellowData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
        />
      </div>
    
      <section className={styles.hero}>
        <span>O protagonismo feminino na música pop</span>

        <h2>Quem comanda a indústria e os charts?</h2>
        <p>
          Um relatório da USC Annenberg analisou a indústria musical pop entre 2012 e 2021 e trouxe dados reveladores sobre discriminação de gênero e raça.
          <br/><br/>
          Após examinarem mil músicas, as pesquisadoras perceberam que entre os artistas:
          <br/> - Apenas 22% eram mulheres.
          <br/> - Apenas 13% eram mulheres compositoras.
          <br/> - Apenas 3% eram mulheres produtoras.
          <br/> - Apenas 0,6% dos créditos foram para mulheres não brancas.
          <br/> - Apenas 13.6% dos nomeados ao Grammy eram mulheres.
        </p>

        <div className={styles.link}>
          <a href="https://assets.uscannenberg.org/docs/aii-inclusion-recording-studio-20220331.pdf" target="blank">
            <FiLink2 color="#db3a34" size={25} className={styles.icon} />
          </a>

          <p>Acesse o relatório Inclusion In The Recording Studio?</p>
        </div>
      </section>
    </main>

    <main className={styles.contentContainer}>
      <img src="images/blur.png" />
    
      <section className={styles.hero}>
        <span>A história da música brasileira, no feminino</span>

        <h2 className={styles.colorTitle}>Quem conta a história da música brasileira?</h2>
        <p>
          Que mulheres fazem música no Brasil e no mundo não é novidade.
          No entanto, as pesquisas e relatos mostram que a indústria musical ainda segue uma lógica patriarcal e não inclusiva.
          <br/><br/>
          Homens brancos são maioria nos espaços e instituições culturais que detém capital político e social - e a história da música segue sendo contada a partir de suas conquistas.
          <br/><br/>
          É hora de registrarmos a história da música a partir de uma perspectiva inclusiva - celebrando artistas mulheres, compartilhando seus trabalhos e reconhecendo suas jornadas.
        </p>

        <StartPlaylistButton title="Comece a explorar" />
      </section>
    </main>
    </>
  )
};