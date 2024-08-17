import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";
import '../styles/GamePage.css';

export default function GamePage({pokemonArray, shuffleCards, setGameLoad, setIsLoading}) {
  const [ignoreClick, setIgnoreClick] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const roundToPlay = pokemonArray.length;

  function clickLogic(pokemon) {
    if (pokemon.clicked) return "Lose";
    if (score === roundToPlay - 1) return "win";
    return "";
  }

  function handleClick(pokemon) {
      setIgnoreClick(true);
      if (ignoreClick) return;
      if (!pokemon.clicked) setScore(score + 1);
      let outcome = clickLogic(pokemon);
      if (outcome !== "") {
          setResult(outcome);
          setIgnoreClick(true);
          return;
      }
      pokemon.clicked = true;
      
      setIsFlipped(true);
      setTimeout(() => {
          shuffleCards();
      }, 1000)
      setTimeout(() => {
          setIsFlipped(false);
          setIgnoreClick(false);
      },1500)    
  }

  function restartGame() {
      setScore(0);
      setGameLoad(false);
      setIsLoading(true);
  }

  function goMainMenu() {
      setScore(0);
      setResult("");
      setGameLoad(false);
      setIsLoading(false);
  }

  const gridClass = pokemonArray.length === 9 ? 'grid-3x3' :
                      pokemonArray.length === 15 ? 'grid-3x5' :
                      pokemonArray.length === 21 ? 'grid-3x7' : '';

  return (
    <div className="game-page">
        <div className="header-container">
            <Header score={score}/>
        </div>
        <div className={`card-grid ${gridClass}`}>
            {pokemonArray.map(pokemon => (
                <Card 
                    key={pokemon.id}
                    pokemon={pokemon}
                    handleClick={handleClick}
                    isFlipped={isFlipped} 
                />
            ))}
        </div>
        <div className="score-container">
            <div className="score-display">
                <span>{score} </span>/ <span>{roundToPlay}</span>
            </div>
            <div 
                className="help-button"
                onMouseEnter={() => setShowHelp(true)}
                onMouseLeave={() => setShowHelp(false)}
            >
                ?
                {showHelp && (
                    <div className="help-text">
                        Do not click on the same card twice!
                    </div>
                )}
            </div>
        </div>
        {result !== "" && 
            <GameOver
                result={result}
                restartGame={restartGame}
                goMainMenu={goMainMenu}
            />
        }
    </div>
  );
}