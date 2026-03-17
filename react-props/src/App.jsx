import React from 'react';
import CardList from './components/CardList/CardList';
import { cardsData } from './data';
import './App.css'; // Якщо залишили стандартний файл стилів

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Галерея React-карток</h1>
      {/* Передаємо масив об'єктів через пропси */}
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;