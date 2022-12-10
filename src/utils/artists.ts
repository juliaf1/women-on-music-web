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
    spotify: string | null;
    website: string | null;
    instagram: string | null;
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
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/ellen_npua69.png",
  content: {
    main_video_url: "https://youtu.be/FTxhzHPhANE",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/uhIhBu_ajW4",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/2Lw4xNNXMrVhYWLNTmBo7B",
    website: "https://www.ellenoleria.com.br/",
    instagram: "https://www.instagram.com/ellenoleria/",
  }
}

const joyce: Artist = {
  id: "joyce",
  name: "Joyce Moreno",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630994/TCC/joyce_n7pq1q.png",
  content: {
    main_video_url: "https://youtu.be/Uc-yb_IfpEU",
    videos: [
      {
        video_url: "-",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/5644bJMU3NkJN0edhyHV3v",
    website: "https://www.joycemoreno.com/",
    instagram: "https://www.instagram.com/joycemoreno.oficial/",
  }
}

const indiana: Artist = {
  id: "indiana",
  name: "Indiana Nomma",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/indiana_bpzrx8.png",
  content: {
    main_video_url: "https://youtu.be/HOViknHoQqA",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/RYqv223FlRQ",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/0YurcYGdnf7oyKKPlFqx59",
    website: "https://linktr.ee/indiananomma/",
    instagram: "https://www.instagram.com/indiananomma/",
  }
}

const vanessa: Artist = {
  id: "vanessa",
  name: "Vanessa Moreno",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670645957/TCC/vanessa2_zjlnyv.png",
  content: {
    main_video_url: "https://youtu.be/ySCPgiYpFzk",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/kNY6Sr-CJM0",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/3E4sXUXWL4yK5adNYER3a4",
    website: "https://linktr.ee/vanessamorenooficial/",
    instagram: "https://www.instagram.com/vanessamorenooficial/",
  }
}

const sandra: Artist = {
  id: "sandra",
  name: "Sandra de Sá",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670645957/TCC/sandra2_pjcyxu.png",
  content: {
    main_video_url: "https://youtu.be/FP6do0tQO1w",
    videos: [
      {
        video_url: "-",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/5Rxz1EE4Jj08mu40vlrqHv",
    website: "https://pt-br.facebook.com/sandra.desa.520/",
    instagram: "https://www.instagram.com/sandradesa_oficial/",
  }
}

const evinha: Artist = {
  id: "evinha",
  name: "Evinha",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/evinha_g2tuom.png",
  content: {
    main_video_url: "https://youtu.be/96SsMHYMS1M",
    videos: [
      {
        video_url: "-",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/6cnJ8gP9R3JEh5mCCvOwz3",
    website: "https://www.immub.org/artista/evinha",
    instagram: null,
  }
}

const leny: Artist = {
  id: "leny",
  name: "Leny Andrade",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630994/TCC/leny_azlmtb.png",
  content: {
    main_video_url: "https://youtu.be/OcCyhzjX6V8",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/OcCyhzjX6V8?start=860",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/0cWAA0nMjRXh8o61j3hUgm",
    website: "https://immub.org/artista/leny-andrade",
    instagram: "https://www.instagram.com/lenyandradeoficial/",
  }
}

const mariateresa: Artist = {
  id: "maria-teresa",
  name: "Maria Teresa Madeira",
  briefing: "-",
  city: "-",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/mariateresa_emgbgk.png",
  content: {
    main_video_url: "https://youtu.be/BBdZOLDz93U",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/d2kRNQnLU88",
        title: "-",
        description: "-",
      }
    ],
  },
  socials: {
    spotify: "https://open.spotify.com/artist/4tVh8HmFQKBiZKKUDT2jpu",
    website: "https://www.mariateresamadeira.com.br/",
    instagram: "https://www.instagram.com/mtmadeira.piano/",
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