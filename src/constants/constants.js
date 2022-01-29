import portfolioOld from "../images/portfolio-old.jpg";
import ri from "../images/ri.jpg";
import wyin from "../images/wyin.jpg";

export const projects = [
  {
    title: "Rocket English - Solar System Edition",
    description:
      "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
    image: ri,
    tags: ["React.js", "JavaScript", "Jest", "External API"],
    source: "https://github.com/lukaszmielczarekdev/rocket-english",
    visit: "https://rocket-english.pages.dev",
    id: 0,
  },
  {
    title: "WYIN - What Year Is Now?",
    description:
      "The app converts the current time to a specific year and displays historical events based on that date. It also allows the user to search for a specific date or draw a random one.",
    image: wyin,
    tags: ["React.js", "JavaScript", "External API"],
    source: "https://gitlab.com/niemamemaila/wyin-fe-webapp",
    visit: "https://app-ci.spio-wyin.workers.dev",
    id: 1,
  },
  {
    title: "Portfolio",
    description:
      "The first version of the portfolio. Simple and modest. It is the first independent project that I have done from start to finish.",
    image: portfolioOld,
    tags: ["JavaScript"],
    source: "https://github.com/lukaszmielczarekdev/portfolio",
    visit: "https://mielczarek-lukasz.pages.dev",
    id: 2,
  },
  {
    title: "Portfolio (advanced)",
    description:
      "A new version of the portfolio using more advanced solutions. Here, I used tools that I have learned from the time I built the first version of the portfolio.",
    image: portfolioOld,
    tags: ["React.js", "JavaScript", "Styled Components"],
    source: "https://github.com/lukaszmielczarekdev/my-portfolio",
    visit: "https://lukasz-mielczarek.pages.dev",
    id: 2,
  },
];

export const TimeLineData = [
  { year: 2020, text: "Started my journey." },
  { year: 2021, text: "Created the WYIN app with my team (first project)." },
  {
    year: 2021,
    text: "Completed postgraduate studies in Software Engineering.",
  },
  { year: "2022", text: "Finished the Rocket English app." },
];
