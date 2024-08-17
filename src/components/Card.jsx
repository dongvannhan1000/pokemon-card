import { capitalize } from "./utils";
import '../styles/Card.css';

export default function Card({pokemon, handleClick, isFlipped}) {
    const types = pokemon.types.map(type => type.type.name);

    return (
        <div
            onClick={() => handleClick(pokemon)}
            className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-inner">
                <div className="card-face front">
                    <div className="pokemon-image">
                        <img src={pokemon.images.other['official-artwork'].front_default} alt={pokemon.name} />
                    </div>
                    <div className="pokemon-info">
                        <div className="pokemon-name">{capitalize(pokemon.name)}</div>
                        <div className="pokemon-types">
                            {types.map(type => (
                                <span key={type} className={`type-label ${type}`}>{capitalize(type)}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-face back"></div>
            </div>
        </div>
    );
}