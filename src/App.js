import logo from './logo.svg';
import './App.css';

import Header from "./Header";
import Nav from "./Nav";
import GameSetup from './GameSetup';
import GamePlay from './GamePlay';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <GameSetup />
      <GamePlay />
    </div>
  );
}

export default App;
