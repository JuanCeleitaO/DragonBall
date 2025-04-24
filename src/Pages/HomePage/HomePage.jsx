import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import Card from '../../Components/Card/Card';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then(response => response.json())
      .then(char => setData(char.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main id='home-page'>        
      <div id='characters'>
        {data.map((element) => (
          <div key={element.id}>
            <Link to={`/characters/${element.id}`}>
              <Card 
                img={element.image} 
                nombre={element.name} 
                especie={element.race}  
                baseKi={element.ki} 
                totalKi={element.maxKi} 
                affiliation={element.affiliation}
                gender={element.gender || "Género no disponible"}
              />
            </Link>            
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
