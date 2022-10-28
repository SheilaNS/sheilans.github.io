import style from '../assets/css/Title.module.css';

export default function Title({ title }) {
  return (
    <div className={ style.container }>
    <div className={ style.content }>
      <h1>{ title }</h1>
    </div>
  </div>

  );
}