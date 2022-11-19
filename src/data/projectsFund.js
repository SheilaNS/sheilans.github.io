import pixels from '../assets/images/projects/pixel-art.png';
import play from '../assets/images/projects/playground.png';
import zoo from '../assets/images/projects/zoo2.png';
import github from '../assets/icons/github.svg';
import web from '../assets/icons/web.svg';

const contacts = [
  {
    name: "Playground Functions",
    image: play,
    description: "Brincando com lógica de programação em JavaScript e aprendendo sobre tipos e variáveis.",
    gitHub: "https://github.com/SheilaNS/project-playground-functions",
    gitIcon: github,
    web: undefined,
    webIcon: web,
  },
  {
    name: "Pixels Art",
    image: pixels,
    description: "Desenhe com arte pixelada em um board dinâmico.",
    gitHub: "https://github.com/SheilaNS/project-pixels-art",
    gitIcon: github,
    web: "https://sheilans.github.io/project-pixels-art/",
    webIcon: web,
  },
  {
    name: "Zoo Functions",
    image: zoo,
    description: "Sistema de gerenciamento de um Zoológico usando Higher Order Functions.",
    gitHub: "https://github.com/SheilaNS/project-zoo-functions",
    gitIcon: github,
    web: undefined,
    webIcon: web,
  },
]

export default contacts;