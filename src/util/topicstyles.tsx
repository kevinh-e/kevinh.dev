export type Topic = "FE" | "ML" | "FS" | "EX";

type TopicStyle = {
  badgeShadow: string;
  cardHoverShadow: string;
  cardBorder: string;
};

export const topicStyles: Record<Topic, TopicStyle> = {
  FE: {
    badgeShadow: "shadow-[0_0_10px_#615fff]",
    cardHoverShadow: "hover:shadow-[0_0_15px_#615fff]",
    cardBorder: "hover:border-indigo-400/80",
  },
  ML: {
    badgeShadow: "shadow-[0_0_10px_#00d5be]",
    cardHoverShadow: "hover:shadow-[0_0_15px_#00d5be]",
    cardBorder: "hover:border-teal-400/80",
  },
  FS: {
    badgeShadow: "shadow-[0_0_10px_#ec003f]",
    cardHoverShadow: "hover:shadow-[0_0_15px_#ec003f]",
    cardBorder: "hover:border-rose-500/80",
  },
  EX: {
    badgeShadow: "shadow-[0_0_10px_#fd9a00]",
    cardHoverShadow: "hover:shadow-[0_0_15px_#fd9a00]",
    cardBorder: "hover:border-amber-500/80",
  },
};
