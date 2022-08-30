import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard";


let generateDeck = () => {
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø']
  for (let i = 0; i < 16; i++) {

    let deck = [];

    let card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    deck.push(card);
    shuffle(deck)
    return deck;
  }


}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state =  {generateDeck()}
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <>
            Memory Game
          </>
          <a
            className="App-link"
          >
            Match cards to win
          </a>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }

}



export default App;
