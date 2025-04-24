import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import "./Card.css";

const Card = (props) => {
  return (
    <Box className="charCard">
      <Box className="imageContainer">
        <img 
          className="characterImage" 
          src={props.img} 
          alt={props.nombre} 
        />
      </Box>
      <Box className="contentContainer">
        <Typography variant="h5" className="characterName ">
          {props.nombre}
        </Typography>
        <Typography variant="body1" className="characterSpecies">
          {props.especie}
        </Typography>

        
        <Stack className="characterStats">
        <Box>
  <Typography variant="body2" className="characterGender">Genero:</Typography>
  <Typography>
    {props.gender ? ` ${props.gender}` : "Género no disponible"}
  </Typography>
</Box>
            <Box>
            <Typography variant="body2" className="statLabel">Afiliación:</Typography>
            <Typography variant="body2" className="statValue">{props.affiliation}</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

Card.defaultProps = {
  img: "https://www.shutterstock.com/image-vector/silhouette-character-dragonball-z-anime-600nw-2363148467.jpg",
  nombre: "_",
  especie: "_",
  gender: "_",
};

export default Card;