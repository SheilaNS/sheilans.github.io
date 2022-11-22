import pixels from '../assets/images/projects/pixel-art.png';
import lessons from '../assets/images/projects/lessons2.png';
import play from '../assets/images/projects/playground.png';
import zoo from '../assets/images/projects/zoo2.png';
import color from '../assets/images/projects/guess2.png';
import meme from '../assets/images/projects/meme.png';
import github from '../assets/icons/github.svg';
import web from '../assets/icons/web.svg';

const contacts = [
  {
    name: "Lessons Learned",
    image: lessons,
    description: "First project at Trybe Course applying basics HTML and CSS. Refactored with TailwindCSS",
    gitHub: "https://github.com/SheilaNS/project-lessons-learned",
    gitIcon: github,
    web: "https://sheilans.github.io/project-lessons-learned/",
    webIcon: web,
  },
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
    name: "Color Guess",
    image: color,
    description: "Can you guess the color? Simple game with RGB Color in JavaScript.",
    gitHub: "https://github.com/SheilaNS/project-color-guess",
    gitIcon: github,
    web: "https://sheilans.github.io/project-color-guess/",
    webIcon: web,
  },
  {
    name: "Meme Generator",
    image: meme,
    description: "Create your own memes with this fun project made in JavaScript.",
    gitHub: "https://github.com/SheilaNS/project-meme-generator",
    gitIcon: github,
    web: "https://sheilans.github.io/project-meme-generator/",
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