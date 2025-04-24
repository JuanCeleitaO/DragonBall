import "./Header.css";

import NavBar from "../../Components/Navbar/Navbar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://i.ibb.co/m5F0gDhb/logo-removebg-preview.png" alt="Logo React And Morty" />
        <h1 id="he">Dragon Ball Z API</h1>
        <p id="he">Personajes</p>
        <NavBar/>
    </header>
  )
}

export default Header