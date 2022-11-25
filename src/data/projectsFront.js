import tunes from '../assets/images/projects/trybetunes.png';
import tryunfo from '../assets/images/projects/tryunfo.png';
import solar from '../assets/images/projects/solar3.png';
import wallet from '../assets/images/projects/wallet.png';
import github from '../assets/icons/github.svg';
import web from '../assets/icons/web.svg';


const front = [
  {
    name: "Solar System",
    image: solar,
    description: "First project in React. Learn more about space missions.",
    gitHub: "https://github.com/SheilaNS/project-solar-system",
    gitIcon: github,
    web: "https://sheilans.github.io/project-solar-system/",
    webIcon: web,
  },
  {
    name: "Tryunfo",
    image: tryunfo,
    description: "Create your own deck of top trumps cards.",
    gitHub: "https://github.com/SheilaNS/project-tryunfo",
    gitIcon: github,
    web: undefined,
    webIcon: web,
  },
  {
    name: "TrybeTunes",
    image: tunes,
    description: "Search by artists/albums and create your favorite music list.",
    gitHub: "https://github.com/SheilaNS/project-trybetunes",
    gitIcon: github,
    web: "https://project-trybetunes-nu.vercel.app/",
    webIcon: web,
  },
  {
    name: "TrybeWallet",
    image: wallet,
    description: "Manage your daily spending in any currency.",
    gitHub: "https://github.com/SheilaNS/project-trybewallet",
    gitIcon: github,
    web: "https://sheilans.github.io/project-trybewallet/",
    webIcon: web,
  },
]

export default front;