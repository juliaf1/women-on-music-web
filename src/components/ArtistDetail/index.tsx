import { FiLink2 } from 'react-icons/fi';

import { Artist as ArtistProps } from '../../utils/artists';

import styles from './styles.module.scss';

interface Props {
  artist: ArtistProps;
}

export function ArtistDetail({ artist }: Props) {
  let mainYoutubeUrl = artist.content.main_video_url
  let videoContent = artist.content.videos[0]

  return(
    <div className={styles.container}>

      <div className={styles.contentContainer}>
        <h1>{videoContent.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: videoContent.description }} />

        <iframe className={styles.video} src={videoContent.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

        <p dangerouslySetInnerHTML={{ __html: artist.briefing }} />
      </div>

      <a href={mainYoutubeUrl} className={styles.link}>
        <FiLink2 size={18} className={styles.icon} />
        Ver programa completo
      </a>
    </div>
  )
};