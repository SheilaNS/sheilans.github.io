import logo from './coding-circle1.png';
import full from './full-stack2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={full} className="App-full" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Sheila Nakashima dos Santos
        </h2>
        <p>
          {'< Desenvolvedora />'}
        </p>
      </header>
    </div>
  );
}

export default App;
