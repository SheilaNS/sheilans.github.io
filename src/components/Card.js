import card from '../assets/css/Card.module.css';

export default function Card({name, logo}) {
  return (
    <div className={ card.container }>
      <img src={ logo } alt={ name } className={ card.logo } />
      <p className={ card.name }>{ name }</p>
    </div>
  );
}