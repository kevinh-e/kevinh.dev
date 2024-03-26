import ContactCard from "@/components/contact-card";
import { EnvelopeClosedIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import clsx from "clsx";


export interface CardItem {
  icon: any;
  href: string;
  label: string;
  handle: string;
  idx: number;
}

const socials: CardItem[] = [
  {
    icon: <TwitterLogoIcon color="white" height="40" width="40" />,
    href: "https://twitter.com/chronark_",
    label: "twitter.com",
    handle: "@lania-keaa_",
    idx: 1,
  },
  {
    icon: <EnvelopeClosedIcon color="white" height="40" width="40" />,
    href: "mailto:kevinhe@lania-keaa.dev",
    label: "Email",
    handle: "kevinhe@lania-kea.dev",
    idx: 2,
  },
  {
    icon: <GitHubLogoIcon color="white" height="40" width="40" />,
    href: "https://github.com/lania-keaa",
    label: "github.com",
    handle: "lania-keaa",
    idx: 3,
  },
];

export default function Example() {
  return (
    
    <div className="w-fit h-fit duration-1000 animate-grow overflow-hidden">
      <div className="container overflow-hidden flex items-center justify-center px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-[20vh] lg:gap-16">
          {socials.map((item) => (
            <div className={clsx(
                {
                  'animate-fade-card-1': (item.idx === 1),
                  'animate-fade-card-2': (item.idx === 2),
                  'animate-fade-card-3': (item.idx === 3),
                },
            )}>
              <ContactCard item={item}/>
            </div>
          ))}
      </div>
    </div>
    </div >
  );
}
