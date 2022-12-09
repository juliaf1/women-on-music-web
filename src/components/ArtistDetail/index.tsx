import { IoMdArrowBack } from 'react-icons/io';

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
        <p>{videoContent.description}</p>

        <iframe className={styles.video} src={videoContent.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p>{artist.briefing}</p>
      </div>
    </div>
  )
};