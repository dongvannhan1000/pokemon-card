import '../styles/Header.css';

export default function Header({score}) {
    return (
        <div className="header">
            <div className="score-container">
                <h4 className="score-text">
                    <span>Score:</span> 
                    <span>{score}</span>
                </h4>
            </div>
        </div>
    )
}