import './App.css';
import GameItem from './images/gameItem.jpeg'

function App() {
  return (
    <div className="main--content">
      <div className="title-menu">
        <h2>Choose your game</h2>
      </div>
      <div className="items-games">
        <a href="/allumettes.html">
        <img src={GameItem} alt="photo générique de jeux" />
        </a>
        <a href="/mastermind/Mastermind">
        <img src={GameItem} alt="photo générique de jeux" />
        </a>
      </div>
    </div>
  );
}

export default App;
