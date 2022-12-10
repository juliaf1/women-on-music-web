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
  briefing: "Nascida e criada na Boca do Mato, Méier, Leny começou a tocar piano aos seis anos de idade. Aos nove, entrou para o Conservatório Brasileiro de Música e aos quinze já se apresentava como 'crooner' de orquestras. Mestre do improviso, Leny é reconhecida mundialmente pela síntese samba-jazz.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630994/TCC/leny_azlmtb.png",
  content: {
    main_video_url: "https://youtu.be/OcCyhzjX6V8",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/OcCyhzjX6V8?start=860",
        title: "A influência do jazz",
        description: "'Ele chegou no Beco das Garrafas e disse assim: fiz uma música, porque vocês estão botando muito jazz na bossa nova.' - Leny reconta quando Carlos Lyra compôs Influência do Jazz.\n Para a cantora e pianista, que hoje é referência em samba-jazz no mundo, o desconforto do colega com a influência que o jazz norte-americano passava a ter no gênero brasileiro foi motivo de graça. Isso porque, a música brasileira existe em condição multicultural - com fortes influências portuguesas, ameríndias, africanas e, também, americanas do jazz.\n Leny topa gravar a composição, mas a transforma, com sua voz e os arranjos de Tenório Júnior, em uma grande celebração da mistura brasileira e da fusão jazz, samba e bossa nova.",
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
  briefing: "A pianista Maria Teresa Madeira transita entre o campo acadêmico e o mundo artístico com dedicação e excelência - acumulando prêmios, passagens por orquestras, discos e até indicação ao Grammy. A pianista e doutora se dedica a projetos que vão de Ernesto Nazareth a Chiquinha Gonzaga.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/mariateresa_emgbgk.png",
  content: {
    main_video_url: "https://youtu.be/BBdZOLDz93U",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/d2kRNQnLU88",
        title: "Chiquinha Gonzaga, que mulher empoderada",
        description: "'Chiquinha era emporada. Ô mulher empoderada.' - Maria Teresa reconta uma conversa que teve com sua filha, reconhecendo e celebrando os avanços das mulheres na conquista de mais espaços, que a levou a refletir sobre a força de Chiquinha e toda a sua jornada.\n Desde a formação musical erudita até o envolvimento com a música popular, Chiquinha Gonzaga atravessou dificuldades, mas manteve-se firme fazendo o que acreditava. Essa força é influência para outras artistas mulheres.\n Além de contar sobre a trajeteoria de Chiquinha, Maria Teresa também recorda a sua participação como diretora musical no Forrobodó, revista-musical de Chiquinha - projeto que a abriu muitos caminhos.",
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