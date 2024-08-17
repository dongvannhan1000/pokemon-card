import { useEffect, useState } from "react";
import '../styles/LoadingPage.css';

export default function LoadingPage({isLoading, setGameLoad, pokemonList, setPokemonArray, difficulty}) {
  const [dots, setDots] = useState(1);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const dotString = ".".repeat(dots);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    if (pokemonList.length === 0) return;

    const fetchPokemonData = async () => {
      let numArray = new Set();
      let pokemonTmp = []; 
      const maxLength = difficulty === "Easy" ? 9 : difficulty === "Medium" ? 15 : 21;
      while (numArray.size < maxLength) {
        const randNum = Math.floor(Math.random() * pokemonList.length) + 1;
        numArray.add(randNum);
      }
      for (let num of numArray) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
          const data = await response.json();
          pokemonTmp.push({
            id: data.id,
            name: data.name,
            images: data.sprites,
            types: data.types,
            clicked: false
          });
        } catch (error) {
          console.error("Failed to fetch Pokémon data:", error);
        }
      }

      setPokemonArray(pokemonTmp);
      setIsDataFetched(true);
    };

    fetchPokemonData();
  }, [isLoading, pokemonList, setPokemonArray, difficulty]);

  useEffect(() => {
    if (isDataFetched) {
      const timer = setTimeout(() => {
        setGameLoad(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isDataFetched, setGameLoad]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <h4 className="loading-text">Loading{dotString}</h4>
      </div>
    </div>
  );
}