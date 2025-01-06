export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Homemade Catering",
    year: 2024,
    description:
      "An online marketplace for homemade foods. Buy homemade meals anywhere, and find buyers for your homemade food here. Made with Tradly, a free website builder.",
    url: "https://homemadecatering.tradly.co/",
  },
  {
    title: "Reversi",
    year: 2019,
    description:
      "A classic Japanese board game with the unique twist of some tiles being blocked. Is written in Java and uses design patterns such as Singleton and Observer and Observable. Inspired by a minigame in the videogame Maplestory.",
    url: "https://github.com/raymond-sutandar/Reversi-Project",
  },
];
