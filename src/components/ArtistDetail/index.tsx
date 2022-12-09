import { IoMdArrowBack } from 'react-icons/io';

import { Artist as ArtistProps } from '../../utils/artists';

import styles from './styles.module.scss';

export function ArtistDetail({ artist }: ArtistProps) {
  return(
    <div className={styles.container}>
          <a href="https://www.ubc.org.br/anexos/publicacoes/Por-Elas-Que-Fazem-a-Musica-2021.pdf" target="blank" className={styles.link}>
            <IoMdArrowBack size={18} className={styles.icon} />
            Voltar para playlist
          </a>

      <img src={artist.image_url} alt="" />
      <h1>{artist.name}</h1>
    </div>
  )
};