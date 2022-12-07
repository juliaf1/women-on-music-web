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
  id: "joyce",
  name: "Joyce Moreno",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Rio de Janeiro",
  image_url: "joyce",
  content: {
    main_video_url: "",
    videos: [
      {
        video_url: "",
        title: "",
        description: "",
      }
    ],
  },
  socials: {
    spotify: "joyce",
    website: "joyce",
    instagram: "joyce",
  }
}

const artist_2: Artist = {
  id: "joyce",
  name: "Joyce Moreno",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Rio de Janeiro",
  image_url: "joyce",
  content: {
    main_video_url: "",
    videos: [
      {
        video_url: "",
        title: "",
        description: "",
      }
    ],
  },
  socials: {
    spotify: "joyce",
    website: "joyce",
    instagram: "joyce",
  }
}

export const artists: Array<Artist> = [
  artist_1,
  artist_2
];