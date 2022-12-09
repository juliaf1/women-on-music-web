export interface Artist {
  id: string;
  name: string;
  briefing: string;
  city: string;
  image_url: string;
  content: {
    main_video_url: string;
    videos: Array<Video>;
  };
  socials: {
    spotify: string;
    website: string;
    instagram: string;
  }
};

interface Video {
  video_url: string;
  title: string;
  description: string;
}

const artist_1: Artist = {
  id: "ellen",
  name: "Ellen Oléria",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670449560/TCC/ellen_i1gx4e.png",
  content: {
    main_video_url: "https://youtu.be/FTxhzHPhANE",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/uhIhBu_ajW4",
        title: "Música preta brasileira",
        description: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/2Lw4xNNXMrVhYWLNTmBo7B",
    website: "https://www.ellenoleria.com.br/",
    instagram: "https://www.instagram.com/ellenoleria/?hl=en",
  }
}

const artist_2: Artist = {
  id: "joyce",
  name: "Ellen Oléria",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670449560/TCC/joyce_q5vnn6.png",
  content: {
    main_video_url: "https://www.youtube.com/embed/Uc-yb_IfpEU",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/uhIhBu_ajW4",
        title: "Referências negras na música brasileira",
        description: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/2Lw4xNNXMrVhYWLNTmBo7B",
    website: "https://www.ellenoleria.com.br/",
    instagram: "https://www.instagram.com/ellenoleria/?hl=en",
  }
}

export const artists: Array<Artist> = [
  artist_1,
  artist_2
];