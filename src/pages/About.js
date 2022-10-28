import eu from '../assets/images/Eu.png';
import divisor from '../assets/images/divisor.svg';
import cats from '../assets/images/cats.png';
import eu2 from '../assets/images/eu2.png';
import trybe from '../assets/images/trybe.png';
import Title from '../components/Title';
import about from '../assets/css/About.module.css';

export default function About() {
  return (
    <main className={ about.main }>
      <Title title="About" />
      <div className={ about.body }>
        <div className={ about.info}>
          <img src={ eu } alt="Eu" className={ about.image } />
          <div className='me-text'>
            <h2 className={ about.title }>Hi! My name is Sheila</h2>
            <p className={ about.text }>I was born in oct/1984 in São Paulo City, Brazil. I left my mom’s house to study when I was 22. I lived in Araraquara, for my first degree in Pharmacy and after graduation I went to Itapira, São Carlos and now I live in Campinas. I have never left São Paulo State tho.</p>
          </div>
        </div>
        <img src={ divisor } alt="divisor" className={ about.div } />
        <div className={ about.info}>
          <img src={ cats } alt="Gatos no sofá" className={ about.image } />
          <div className='me-text'>
            <h2 className={ about.title }>These are my babies</h2>
            <p className={ about.text }>I’m a mom of two furballs, one 15-years-old girl and one 13-years-old boy, their names are Nety and David. And you can see on this pic that they have very different personalities. Can you guess who is the girl and who is the boy?</p>
          </div>
        </div>
        <img src={ divisor } alt="divisor" className={ about.div } />
        <div className={ about.info}>
          <img src={ eu2 } alt="Eu no computador" className={ about.image } />
          <div className='me-text'>
            <h2 className={ about.title }>Carreer change</h2>
            <p className={ about.text }>As I said before, I first graduated in Pharmacy. During my professional experience, I noticed I needed a system to help me on my rotine, so I dedided start studying Software Analysis and Development to develop something for me. While I was studying, I could see myself developing for the rest of my life so I left Pharmacy and started my career change.</p>
          </div>
        </div>
        <img src={ divisor } alt="divisor" className={ about.div } />
        <div className={ about.info}>
          <img src={ trybe } alt="Trybe logo" className={ about.image } />
          <div className='me-text'>
            <h2 className={ about.title }>Today</h2>
            <p className={ about.text }>I’m working as a Summer Instructor for the same school I’m finishing the software development course at. This way I can help other students and learn at the same time. Now I’m open to work and I developed this portfolio to show what I've learned after almost one year of studying on Trybe.</p>
          </div>
        </div>
        <img src={ divisor } alt="divisor" className={ about.div } />
      </div>
    </main>
);
}