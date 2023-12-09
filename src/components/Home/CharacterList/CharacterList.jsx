import { Link } from "react-router-dom";
import useRickAndMortyApi from "../../../hooks/useRickandMortyApi";
import "./characterlist.styles.css";

const CharacterList = () => {
  const { characters, loading, error } = useRickAndMortyApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderCharacterCard = (character) => (
    <Link
      to={`/${character.id}/details`}
      key={character.id}
      className="character-card"
    >
      <img src={character.image} alt={character.name} />
      <div className="character-details">
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </Link>
  );

  const firstNineCharacters = characters.slice(0, 9);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="character-list">
        {firstNineCharacters.map(renderCharacterCard)}
      </div>
    </div>
  );
};

export default CharacterList;
