import '../styles/GameOver.css';

export default function GameOver({result, restartGame, goMainMenu}) {
    return (
        <>
            <div className={`game-over-modal ${result}`}>
                <div className="result-text">
                    {result === "win" 
                        ? "You won!"
                        : "You lose!"
                    }
                </div>
                <div className="button-container">
                    <button className="btn" onClick={restartGame}>Restart</button>
                    <button className="btn start-btn" onClick={goMainMenu}>Main Menu</button>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    )
}