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

const ellen: Artist = {
  id: "ellen",
  name: "Ellen Oléria",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/ellen_npua69.png",
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

const joyce: Artist = {
  id: "joyce",
  name: "Joyce Moreno",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630994/TCC/joyce_n7pq1q.png",
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

const indiana: Artist = {
  id: "indiana",
  name: "Indiana Nomma",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Algum Lugar",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/indiana_bpzrx8.png",
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

const vanessa: Artist = {
  id: "vanessa",
  name: "Vanessa Moreno",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Algum Lugar",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/vanessa_xb8vzc.png",
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

const sandra: Artist = {
  id: "sandra",
  name: "Sandra de Sá",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Algum Lugar",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/sandra_it7lc9.png",
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

const evinha: Artist = {
  id: "evinha",
  name: "Evinha",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Algum Lugar",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/evinha_g2tuom.png",
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

const leny: Artist = {
  id: "leny",
  name: "Leny Andrade",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Algum Lugar",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630994/TCC/leny_azlmtb.png",
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

const mariateresa: Artist = {
  id: "maria-teresa",
  name: "Maria Teresa Madeira",
  briefing: "Nascida no Rio de Janeiro, a cantora, compositora, arranjadora e instrumentista, Joyce Moreno já lançou 34 CDs e 2 DVDs individuais, além de compilações, participações e cerca de 400 músicas gravadas por alguns dos maiores nomes da música popular brasileira, como Elis Regina, Maria Bethania, Monica Salmaso, Gal Costa, Milton Nascimento, Ney Matogrosso, Edu Lobo, Emilio Santiago, Boca Livre, Nana Caymmi, Zizi Possi, Elizeth Cardoso, Simone, Leny Andrade, entre muitos outros.",
  city: "Algum Lugar",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/mariateresa_emgbgk.png",
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
  ellen,
  joyce,
  indiana,
  vanessa,
  sandra,
  evinha,
  leny,
  mariateresa
];