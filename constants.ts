export const METADATA = {
  title: "James Talamo | Portfolio",
  description:
    "I am a full stack developer who bridges design, frontend, and backend development to build scalable, performant, and user-focused web applications.",
  siteUrl: "https://jamestalamo.vercel.app",
};
// SKILLS 
export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and build full stack applications",
  "I turn ideas into scalable systems",
  "I craft modern user experiences",
  "I develop end-to-end web solutions",
];

export const EMAIL = "jamesdevsolution@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/jamesdevydev",
  instagram: "https://www.instagram.com/jamesx4rr/"
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

//projects ko
export const PROJECTS: IProject[] = [
  {
    name: "Toonstop - Free Webtoon Reader HD",
    image: "/projects/toonstop.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Korean Webtoon reader! No ADS!",
    gradient: ["#ffbb00ff", "#ff9b29ff"],
    url: "https://toonstop.vercel.app",
    tech: ["react", "next", "tailwind", "typescript", "mongodb"],
  },
  {
    name: "GoManga - Free Manga Reader HD",
    image: "/projects/gomanga.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Updated Manga Chapters for Free! No ADS!",
    gradient: ["#5b2424ff", "#ff0000ff"],
    url: "https://gomanga.vercel.app",
    tech: ["next", "react", "tailwind", "typescript", "mongodb"],
  },
  {
    name: "SSSANIME - Free Anime Streaming Website HD",
    image: "/projects/sssanime.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Your Home for High Quality HD Anime Streaming Website",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://sssanime.vercel.app",
    tech: ["typescript", "next", "tailwind", "react", "mongodb"],
  },
  {
    name: "ScraperGo - Free API to fetch Korean Manwhas!",
    image: "/projects/scrapergo.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "HD Images for Korean Manwha - Plug and Play!",
    gradient: ["#003052", "#167187"],
    url: "https://scrapergo.vercel.app",
    tech: ["typescript", "tailwind", "next", "mongodb"],
  },
  {
    name: "GoManga Api - Free API to fetch updated Manga",
    image: "/projects/gomanga-api.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Angular",
    gradient: ["#3A0000", "#771E1E"],
    url: "gomanga-api.vercel.app",
    tech: ["next", "typescript", "tailwind", "mongodb"],
  },
  {
    name: "CrimeScope - Las Pinas Barangay Crime Pattern Analysis [ THESIS ]",
    image: "/projects/crimescope.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "A depth banragay crime pattern analysis in las pinas.",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://crimescope.vercel.app",
    tech: ["next", "typescript", "tailwind", "react", "javascript", "mongodb"],
  },
  {
    name: "S1000RR",
    image: "/projects/s1000rr.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "A website that uses GSAP to showcase BMW motorcycle",
    gradient: ["#5E4C06", "#746528"],
    url: "https://s1000rr.vercel.app",
    tech: ["next", "html", "css", "gsap", "tailwind"],
  },
  {
    name: "MyTots - A free journal for everyone",
    image: "/projects/mytots.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "A journaling network where you can share your thoughts",
    gradient: ["#172839", "#334659"],
    url: "https://mytots.vercel.app/",
    tech: ["next", "tailwind", "typescript", "mongodb"],
  },
  {
    name: "Gym Management",
    image: "/projects/gymmanagement.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "A gym management that has roles to make gym owners lives easier",
    gradient: ["#142D46", "#2E4964"],
    url: "#",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Classified - Class scheduling system for school [ SCHOOL PROJECT ]",
    image: "/projects/classified.jpg",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Class Scheduling system built for school project. Roles security and more",
    gradient: ["#470700", "#712A23"],
    url: "https://classified.vercel.app/",
    tech: ["javascript", "html", "css"],
  }
];

export const SKILLS = {
  frontend: [
    "next",
    "react",
    "javascript",
    "zustand",
    "gsap",
    "tailwind",
    "html",
    "css",
  ],
  userInterface: ["figma", "canva"],
  other: ["git", "vercel", "render"],
  backend: ["nodejs", "mongodb"]
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Speaker at React India",
    size: ItemSize.SMALL,
    subtitle:
      "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/s.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer 2 (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems around Livingroom device performance",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/s.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/s.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/ss-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/sffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/sbsite.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/ss-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/sll.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/sd.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/scture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/s.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/sjpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/s7.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/s.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/s.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/srt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/s.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}