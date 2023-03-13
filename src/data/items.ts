import jogodamemoria from "../assets/jogodamemoria.jpg";
import netflixclone from '../assets/netflixclone.jpg'

export type itemType = {
  id: number;
  title: string;
  img: string;
  description: string;
  porject: string;
  repository: string;
};

export const items = [
  {
    id: 0,
    title: "Jogo da memoria",
    img: jogodamemoria,
    porject: "https://mar-lima.github.io/jogo-da-memoria/",
    repository: "https://github.com/mar-lima/jogo-da-memoria",
    description:
      "Projeto criado durante o curso de React + typescript da B7web ultilizando para estilização o styled componentes.",
  },
  {
    id: 1,
    title: "Netflix clone",
    img: netflixclone,
    porject: "https://mar-lima.github.io/nextflixClone/",
    repository: "https://github.com/mar-lima/nextflixClone",
    description:
      "Projeto criado durante o curso de React + typescript da B7web ultilizando para estilização o styled componentes.",
  },
  {
    id: 2,
    title: "Jogo da memoria",
    img: jogodamemoria,
    porject: "https://mar-lima.github.io/jogo-da-memoria/",
    repository: "",
    description:
      "Projeto criado durante o curso de React + typescript da B7web ultilizando para estilização o styled componentes.",
  },
];
