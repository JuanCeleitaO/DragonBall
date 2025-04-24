import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./Navbar.css";



const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 0, width: 200, backgroundColor: "#FFA726",fontSize:20}} variant="contained">INICIO</Button>
        </Link>
        <Link to={"/character/male"}>
          <Button sx={{marginTop: 4, width: 200 , backgroundColor: "#FFA726",fontSize:20}} variant="contained">MASCULINO</Button>  
        </Link>
        <Link to={"/character/female"}>
          <Button sx={{marginTop: 4, width: 200, backgroundColor: "#FFA726",fontSize:20}} variant="contained">FEMENINO</Button>
        </Link>
        <Link to={"./about"}>
          <Button sx={{marginTop: 4, width: 200 ,backgroundColor: "#FFA726",fontSize:20}} variant="contained">INFORMACION</Button>
        </Link>
    </nav>
  )
}

export default NavBar
