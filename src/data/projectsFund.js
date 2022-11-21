import pixels from '../assets/images/projects/pixel-art.png';
import play from '../assets/images/projects/playground.png';
import zoo from '../assets/images/projects/zoo2.png';
import github from '../assets/icons/github.svg';
import web from '../assets/icons/web.svg';

const contacts = [
  {
    name: "Playground Functions",
    image: play,
    description: "Playing with programming logic in JavaScript and learning about types and variables.",
    gitHub: "https://github.com/SheilaNS/project-playground-functions",
    gitIcon: github,
    web: undefined,
    webIcon: web,
  },
  {
    name: "Pixels Art",
    image: pixels,
    description: "Create art with pixel art on a dynamic board.",
    gitHub: "https://github.com/SheilaNS/project-pixels-art",
    gitIcon: github,
    web: "https://sheilans.github.io/project-pixels-art/",
    webIcon: web,
  },
  {
    name: "Zoo Functions",
    image: zoo,
    description: "Zoo management system using Higher Order Functions.",
    gitHub: "https://github.com/SheilaNS/project-zoo-functions",
    gitIcon: github,
    web: undefined,
    webIcon: web,
  },
]

export default contacts;