import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  beyondata,
  mobmaxime,
  tcs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Planning",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Software Engineer",
    company_name: "Beyondata",
    icon: beyondata,
    iconBg: "#ffffff",
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Mobmaxime",
    icon: mobmaxime,
    iconBg: "#ffffff",
    date: "Mar 2022 - April 2023",
  },
  {
    title: "System Engineer",
    company_name: "TCS",
    icon: tcs,
    iconBg: "#333333",
    date: "July 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Smart Home Automation",
    description:
      "A smarter way to live smart take controll of all electronics over the internet.",
    // tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "mongodb",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind",
    //     color: "pink-text-gradient",
    //   },
    // ],
    image: komikult,
    repo: "https://github.com/HACDedsec/My-IOT-workspace",
    demo: "https://www.instagram.com/oobit_technical_organization/?hl=en",
  },
  {
    id: "project-2",
    name: "OOB-IT WEB",
    description: "Professional Website made from scratch with all native code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    // repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://oob-it.web.app/",
  },
  // {
  //   id: "project-3",
  //   name: "Math Magicians",
  //   description: "This is a single-page calculator app built with React",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: math,
  //   repo: "https://github.com/shaqdeff/Math-Magicians",
  //   demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  // },
  // {
  //   id: "project-4",
  //   name: "Movie Metro",
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: movie,
  //   repo: "https://github.com/shaqdeff/Movie-Metro",
  //   demo: "https://movie-metro.netlify.app/",
  // },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };
