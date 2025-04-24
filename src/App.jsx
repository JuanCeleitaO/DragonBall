import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/Characterpage/CharacterPage"; 
import About from "./Pages/About/About";
import CharacterDetail from "./Pages/CharacterDetail/CharacterDetail";
import myMusic from './assets/Music/tapion.mp3';

const App = () => {
  const [audio] = useState(new Audio(myMusic));
  const startAudio = () => {
    audio.play();
    audio.loop = true;
  };

  return (
    <Router>
      <div className="App"  onClick={startAudio}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:gender" element={<CharacterPage />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
