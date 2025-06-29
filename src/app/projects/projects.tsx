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
  isFlag: boolean;
};

export const projects: Project[] = [
  {
    name: "no-ai",
    description: `User customisable web extension with the goal of filtering "AI generated" summaries, prompts and chatbots. Also restricts or blocks LLM chatbots and tools.`,
    github: "https://github.com/kevinh-e/ai-detox",
    link: "#",
    topic: "EX",
    topicTag: "Extension",
    tags: ["Javascript", "Manifest v3", "WIP"],
    date: " June 29, 2025",
    isBig: false,
    isFlag: false,
  },
  {
    name: "sentimark",
    description: "Sentiment analysis platform for small to medium businesses. Leveraging the power of modern AI APIs: Google Natural Language Processing, Vertex AI and MongoDB's RAG Vector Search, users can gain actionable insights into their businesses from real customer feedback.",
    github: "https://github.com/kevinh-e/sentiment",
    link: "https://sentimark.kevinh.dev/",
    topic: "FS",
    topicTag: "Full Stack + Database",
    tags: ["MongoDB", "Node.js", "Google Cloud", "Clerk", "Tanstack", "WIP"],
    date: "June 15, 2025",
    isBig: true,
    isFlag: false,
  },
  {
    name: "alphazero style chess-engine",
    description: "Powerful deep reinforcement learning chess engine, based on the 2017 paper \"Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm\" that leverages deep neural networks to enhance the Monte-Carlo Tree Search algorithm",
    github: "https://github.com/kevinh-e/BetaOne",
    link: "",
    topic: "ML",
    topicTag: "Machine Learning",
    tags: ["Python", "PyTorch"],
    date: "Apr 27, 2025",
    isBig: true,
    isFlag: false
  },
  {
    name: "kevinh.dev",
    description: "This website",
    github: "https://github.com/kevinh-e/kevinh.dev",
    link: "./",
    topic: "FE",
    topicTag: "Frontend",
    tags: ["Next.js", "Framer"],
    date: "Dec 6, 2024",
    isBig: false,
    isFlag: false
  },
  {
    name: "mini-games",
    description: "Collection of web minigames including slider puzzle, minesweeper, tower of hanoi, wordle and snake",
    github: "https://github.com/kevinh-e/mini-games",
    link: "https://mini-games.kevinh.dev/",
    topic: "FE",
    topicTag: "Frontend",
    tags: ["Astro", "Framer", "WIP"],
    date: "Dec 12, 2024",
    isBig: false,
    isFlag: false
  },
  {
    name: "covid-19 radiography classifier",
    description: "Custom residual neural network based on the 2015 paper \"Deep Residual Learning for Image Recognition\", but tuned for a 256x256 Lung CXR. Includes support for custom image classification against CIFAR10 classes",
    github: "https://github.com/kevinh-e/silver-palm-tree",
    link: "",
    topic: "ML",
    topicTag: "Machine Learning",
    tags: ["Python", "PyTorch"],
    date: "Apr 18, 2025",
    isBig: true,
    isFlag: false
  },
  {
    name: "tastebuds",
    description: "Restaurant recommendation app for indecisive groups of friends",
    github: "https://github.com/kevinh-e/tastebuds",
    link: "https://taste-buds-matcher.onrender.com/",
    topic: "FS",
    topicTag: "Full Stack",
    tags: ["Next.js", "Framer", "socket.io"],
    date: "Mar 26, 2025",
    isBig: true,
    isFlag: false
  },
  {
    name: "presto",
    description: "Deployed minimal slideshow editor project on vercel using a simple redis token database",
    github: "https://github.com/kevinh-e/presto-deploy",
    link: "https://z5478535-presto-deploy-wkdw.vercel.app/",
    topic: "FE",
    topicTag: "Frontend",
    tags: ["ReactJS", "Vite"],
    date: "Nov 15, 2024",
    isBig: false,
    isFlag: false
  },
]
