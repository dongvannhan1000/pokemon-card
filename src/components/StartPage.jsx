import '../styles/StartPage.css';

export default function StartPage({handleGen, generation, handleDifficulty, difficulty, setIsLoading}) {
  const handleStartGame = () => {
    setIsLoading(true);
  }

  return (
    <div className="start-page">
      <div className="content">
        <div id="startMenu" className="start-menu">
          <div id="startMenuContent" className="start-menu-content">
            <div className="menu-section">
              <h3 className="section-title">Choose Pokemon Region:</h3>
              <div className="button-grid">
                <button value="1" onClick={handleGen} className={`btn ${generation === "1" ? 'active' : ''}`}>Kanto</button>
                <button value="2" onClick={handleGen} className={`btn ${generation === "2" ? 'active' : ''}`}>Johto</button>
                <button value="3" onClick={handleGen} className={`btn ${generation === "3" ? 'active' : ''}`}>Hoenn</button>
                <button value="4" onClick={handleGen} className={`btn ${generation === "4" ? 'active' : ''}`}>Sinnoh</button>
                <button value="5" onClick={handleGen} className={`btn ${generation === "5" ? 'active' : ''}`}>Unova</button>
                <button value="6" onClick={handleGen} className={`btn ${generation === "6" ? 'active' : ''}`}>Kalos</button>
                <button value="7" onClick={handleGen} className={`btn ${generation === "7" ? 'active' : ''}`}>Alola</button>
                <button value="8" onClick={handleGen} className={`btn ${generation === "8" ? 'active' : ''}`}>Galar</button>
                <button value="9" onClick={handleGen} className={`btn ${generation === "9" ? 'active' : ''}`}>Paldea</button>
              </div>
            </div>
            <div className="menu-section">
              <h3 className="section-title">Choose Game Difficulty:</h3>
              <div className="button-grid">
                <button value="Easy" onClick={handleDifficulty} className={`btn ${difficulty === 'Easy' ? 'active' : ''}`}>Easy</button>
                <button value="Medium" onClick={handleDifficulty} className={`btn ${difficulty === 'Medium' ? 'active' : ''}`}>Medium</button>
                <button value="Hard" onClick={handleDifficulty} className={`btn ${difficulty === 'Hard' ? 'active' : ''}`}>Hard</button>
              </div>
            </div>
            <div className="start-button-container">
              <button className="btn start-btn" onClick={handleStartGame}>Start Game</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}