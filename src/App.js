
import './App.css';
import React from 'react';
import Home from './components/Home';
import Game from './components/Game';

function App() {
const [playNow, setPlayNow] = React.useState(false);

function handlePage() {
   setPlayNow(true);
}

function back(){
  setPlayNow(false);
}

  return (
    <div>
      {playNow?<Game back={back}/>:<Home handlePage={handlePage}/>}
    </div>
  );
}

export default App;
