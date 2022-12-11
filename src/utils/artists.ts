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
  briefing: "Honduras",
  city: "Filha de pai baiano e mãe gaúcha exilados na década de 60, Indiana Nomma nasceu em Honduras e cresceu pelo mundo. Ela começou a estudar canto quando criança e, antes mesmo de completar vinte anos, já havia se apresentado no Carnegie Hall. Trabalhando com improviso e trompetes de boca, Indiana Nomma é cantora referente na cena do jazz.",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/indiana_bpzrx8.png",
  content: {
    main_video_url: "https://youtu.be/HOViknHoQqA",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/KWmztkPEKMI",
        title: "Do rock a Mercedes Sosa",
        description: "'O vestido vermelho, o cabelo chanel e todo mundo cantando as músicas dela.' - Indiana Nomma tinha só quatro anos, mas nunca esqueceu o show da Mercedes Sosa que assistiu na final da campanha de alfabetização da Nicarágua. A força da presença de Mercedes no palco, com toda a plateia cantando junto, marcou a cantora na infância e influenciou sua trajetória.\n Indiana conta sobre sua jornada, desde o primeiro show de Mercedes Sosa até o tributo que hoje presta em sua homenagem. A música de Indiana, marcada por influências latino-americanas e afro-brasileiras, reflete os elos que a cantora e instrumentista faz entre América Latina e Brasil, criando novas referências e mantendo viva a memória de Mercedes.",
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
  briefing: "Vanessa é cantora, instrumentista, compositora e uma das grandes revelações da cena musical atualmente. Além dos seus seis álbuns lançados e diversas parcerias com nomes de destaque, Vanessa também foi professora de canto e tem formação em canto erudito e popular.",
  city: "São Bernardo do Campo",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670645957/TCC/vanessa2_zjlnyv.png",
  content: {
    main_video_url: "https://youtu.be/ySCPgiYpFzk",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/kNY6Sr-CJM0",
        title: "A trajetória no violão e na MPB",
        description: "'O que é essa música brasileira que você tá querendo me mostrar?' - Vanessa Moreno narra a sua trajetória musical, que começou cedo absorvendo a música que a família tocava em casa, se transformou em amor pelo rock progressivo na adolescência e acabou em uma carreira de sucesso e muitos projetos na MPB.\n Ela conta como entendeu que a música brasileira fazia parte dela, quando começou a estudar violão e dar nome às notas e sons que ouvia em casa, e como foi sua jornada desde então. Vanessa compartilha como faz suas escolhas musicais e reflete sobre a sua relação com o texto, o groove e o ritmo.",
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
  briefing: "Sandra de Sá é instrumentista, cantora e compositora com uma carreira marcada por sucessos. Além de colecionar prêmios, discos e shows transitando por diversos gêneros, como soul, samba e rock, Sandra também acumulou parcerias de sucesso, de Cazuza e Tim Maia à Leci Brandão.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670645957/TCC/sandra2_pjcyxu.png",
  content: {
    main_video_url: "https://youtu.be/FP6do0tQO1w",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/FP6do0tQO1w?start=249",
        title: "Não tem vida sem música",
        description: "'Lá em casa, todo mundo tocava. Música era como respirar.' - Sandra de Sá é filha de baterista e nasceu em uma família de músicos. Para ela, música era como respirar, mas não o que ela se imaginava trabalhando.\n Parece difícil pensar que a compositora de músicas tão marcantes não ia seguir esse caminho, mas ela quase terminou a faculdade e só não seguiu carreira como psicóloga, porque seus amigos começaram a inscrevê-la em diversos festivais de música.\n Sandra conta da sua trajetória e como a música e a arte marcaram sua vida.",
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
  briefing: "Eva Correia José Maria, ou Evinha como ficou conhecida, é cantora e compositora carioca que marcou os anos 60 ao lado de seus irmãos. Antes de seguir carreira solo, lançando discos e participando de orquestras pelo mundo, Evinha compõs o Trio Esperança, grupo que ficou popular entre a Jovem Guarda.",
  city: "Rio de Janeiro",
  image_url: "https://res.cloudinary.com/dz2czxltr/image/upload/v1670630993/TCC/evinha_g2tuom.png",
  content: {
    main_video_url: "https://youtu.be/96SsMHYMS1M",
    videos: [
      {
        video_url: "https://www.youtube.com/embed/96SsMHYMS1M",
        title: "A Jovem Guarda e o Trio Esperança",
        description: "'Meus pais pediram um filho cantor. Nasceram sete!' - Evinha nasceu em uma família de artistas. Ela é irmã de Ronaldo, Roberto e Renato, dos Golden Boys, e de Mario, Regina e Marizinha, do Trio Esperança. Os dois grupos marcaram os anos 60, chegando a se apresentar no programa da Jovem Guarda.\n Evinha narra a sua trajetória pessoal e musical, relembrando momentos chave da sua jornada, como o lançamento de Casaco Marrom e a turnê do Trio Esperança em 1990. Além de contar sobre os reencontros musicais da família.",
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