import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const match = data.items.find((char) => char.id === Number(id));
        setCharacter(match);
      })
      .catch((err) => console.error("Error fetching character:", err));
  }, [id]);

  if (!character) return <p>Personaje no encontrado...</p>;

  return (
    <div className="character-detail">
      <div className="character-card">
        <div className="character-image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="character-info">
          <h2>{character.name}</h2>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Raza:</strong> {character.race}</p>
          <p><strong>Afiliación:</strong> {character.affiliation}</p>
          <p><strong>Ki:</strong> {character.ki}</p>
          <p><strong>Descripción:</strong> {character.description}</p>
        </div>
      </div>
    </div>
    );
};

export default CharacterDetail;