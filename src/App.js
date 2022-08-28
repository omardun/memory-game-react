// import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard";


function App() {
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

export default App;
