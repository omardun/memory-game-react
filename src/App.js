import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard";


// Deck function
let generateDeck = () => {
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø']
  let deck = [];

  for (let i = 0; i < 16; i++) {
    let card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    // console.log(card);
    deck.push(card);
    shuffle(deck)
  }
  return deck;
}

//shuffle function
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

//Class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }

  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex] }
    cardToFlip.isFlipped = true;
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      const firstCard = newDeck[card1Index]
      const secondCard = newDeck[card2Index]



      if (firstCard.symbol != secondCard.symbol) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
      }
      newPickedCards = []

    }
    //pick card state
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
  
    });
  }

  //function unflipped card
  unflipCards(card1Index, card2Index) {
    const card1 = { ...this.state.deck[card1Index], isFlipped: false }
    const card2 = { ...this.state.deck[card2Index], isFlipped: false }

    const newDeck = this.state.deck.map((card, index) => {
      if ( card1Index === index) return card1;
      if (card2Index === index) return card2;
      return card;
    })
    //unflip card state
    this.setState({
      deck: newDeck
    })
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
