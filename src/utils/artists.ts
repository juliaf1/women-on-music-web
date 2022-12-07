export interface Artist {
  id: string;
  name: string;
  briefing: string;
  city: string;
  video_url: string;
  image_url: string;
  title: string;
  content: string;
  socials: {
    spotify: string;
    website: string;
    instagram: string;
  }
};

export const artists: Array<Artist> = [
  {
    id: "joyce",
    name: "joyce",
    briefing: "joyce",
    city: "joyce",
    video_url: "joyce",
    image_url: "joyce",
    title: "joyce",
    content: "joyce",
    socials: {
      spotify: "joyce",
      website: "joyce",
      instagram: "joyce",
    }
  },
];