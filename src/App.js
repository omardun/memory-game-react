import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard";

let generateDeck = () => {
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø']
  let deck = [];

  for (let i = 0; i < 16; i++) {
    let card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    console.log(card);

    deck.push(card);
    // console.log(deck);

    shuffle(deck)

  }
  return deck;


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
    this.state = {
      deck: generateDeck()
    }

  }

  pickCard(cardIndex) {
    if (newPickedCards.length === 2) {
      const card1Index = [0]
      const card2Index = [newPickedCards(1)]
    }
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex] }
    cardToFlip.isFlipped = true;
    let newDeck = this.state.deck.map((card,index) => {
      if (cardIndex === index) {
        return cardToFlip ;
      }
      return card;
    } );
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards //[]
    });
  }


  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)} />
    })
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
          {cardsJSX.slice(0, 4)}
          {cardsJSX.slice(4, 8)}
          {cardsJSX.slice(8, 12)}
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );

  }

}



export default App;
