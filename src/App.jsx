import { useState, useEffect } from 'react';
import Header from './components/Header';
import Scoreboard from './components/ScoreBoard';
import CardGrid from './components/CardGrid';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const pokemonDetails = await res.json();
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default,
            clicked: false,
          };
        })
      );
      setCards(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  const handleCardClick = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, clicked: true } : card
    );
    
    const clickedCard = updatedCards.find((card) => card.id === id);
    
    if (clickedCard.clicked) {
      // Game over
      setScore(0);
      setBestScore(Math.max(score, bestScore));
      resetCards();
    } else {
      // Continue game
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
      shuffleCards(updatedCards);
    }
  };

  const resetCards = () => {
    const resetCards = cards.map((card) => ({ ...card, clicked: false }));
    shuffleCards(resetCards);
  };

  const shuffleCards = (cardsToShuffle) => {
    const shuffled = [...cardsToShuffle].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;