import { Topic } from "@/util/topicstyles";

type Project = {
  name: string;
  description: string;
  github: string;
  link: string;
  topic: Topic;
  topicTag: string;
  tags: string[];
  date: string;
  isBig: boolean;
};

export const projects: Project[] = [
  {
    name: "alphazero style chess-engine",
    description: "powerful deep reinforcement learning chess engine, based on the 2017 paper \"Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm\" that leverages deep neural networks to enhance the Monte-Carlo Tree Search algorithm",
    github: "https://github.com/kevinh-e/BetaOne",
    link: "",
    topic: "ML",
    topicTag: "Machine Learning",
    tags: ["Python", "PyTorch"],
    date: "Apr 27, 2025",
    isBig: true
  },
  {
    name: "kevinh.dev",
    description: "this website",
    github: "https://github.com/kevinh-e/kevinh.dev",
    link: "./",
    topic: "FE",
    topicTag: "Frontend",
    tags: ["Next.js", "Framer"],
    date: "Dec 6, 2024",
    isBig: false
  },
  {
    name: "mini-games",
    description: "collection of web minigames including slider puzzle, minesweeper, tower of hanoi, wordle and snake",
    github: "https://github.com/kevinh-e/mini-games",
    link: "https://mini-games.kevinh.dev/",
    topic: "FE",
    topicTag: "Frontend",
    tags: ["Astro", "Framer", "WIP"],
    date: "Dec 12, 2024",
    isBig: false
  },
  {
    name: "covid-19 radiography classifier",
    description: "custom residual neural network based on the 2015 paper \"Deep Residual Learning for Image Recognition\", but tuned for a 256x256 Lung CXR. Includes support for custom image classification against CIFAR10 classes",
    github: "https://github.com/kevinh-e/silver-palm-tree",
    link: "",
    topic: "ML",
    topicTag: "Machine Learning",
    tags: ["Python", "PyTorch"],
    date: "Apr 18, 2025",
    isBig: true
  },
  {
    name: "tastebuds",
    description: "restaurant recommendation app for indecisive groups of friends",
    github: "https://github.com/kevinh-e/tastebuds",
    link: "https://taste-buds-matcher.onrender.com/",
    topic: "FS",
    topicTag: "Full Stack",
    tags: ["Next.js", "Framer", "socket.io"],
    date: "Mar 26, 2025",
    isBig: true
  },
  {
    name: "presto",
    description: "deployed minimal slideshow editor project on vercel using a simple redis token database",
    github: "https://github.com/kevinh-e/presto-deploy",
    link: "https://z5478535-presto-deploy-wkdw.vercel.app/",
    topic: "FE",
    topicTag: "Frontend",
    tags: ["ReactJS", "Vite"],
    date: "Nov 15, 2024",
    isBig: false
  },
]
