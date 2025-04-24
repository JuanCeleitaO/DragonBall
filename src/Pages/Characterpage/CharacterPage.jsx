import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card"; // Asegúrate que la ruta esté bien
import "./CharacterPage.css";

const CharacterPage = () => {
  const { gender, race } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data.items;

        // Filtro por género
        if (gender) {
          const genderLower = gender.toLowerCase();
          filtered = filtered.filter(
            (char) => char.gender?.toLowerCase() === genderLower
          );
        }

        // Filtro por raza
        if (race) {
          const raceLower = race.toLowerCase();
          filtered = filtered.filter(
            (char) => char.race?.toLowerCase().includes(raceLower)
          );
        }

        setCharacters(filtered);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [gender, race]);

  return (
    <div id="character-page">
      <h1>Personajes</h1>
      <p>Género: {gender}</p>
      {race && <p>Raza: {race}</p>}

      <div id="characters-list">
        {characters.length === 0 ? (
          <p>No se encontraron personajes con estos filtros.</p>
        ) : (
          characters.map((character) => (
            <Link
              to={`/characters/${character.id}`}
              key={character.id}
              className="card-link"
            >
              <Card
                img={character.image}
                nombre={character.name}
                especie={character.race}
                gender={character.gender}
                affiliation={character.affiliation}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CharacterPage;