import React, { useState } from 'react';
import Logo from '../assets/sushiLogo.png';
import '../styles/Navbar.css';
import { ImMenu3 } from "react-icons/im";
import { Link } from 'react-router-dom'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false); 

    const toggleNavbar = () =>{                     // funkcja zmieniająca stan menu
        setOpenLinks(!openLinks);
    }
    
    function imgError() {
        alert('Zdjęcie się nie załadowało!');
      }

  return (
    <div className='navbar'>
        <Link className='logo' to ="/"><img src={Logo} alt='Img not found' onError={imgError}></img></Link>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <div className='hiddenLinks'>
            <Link to ="/">Restauracja</Link>
            <Link to ="/menu">Menu</Link>
            <Link to ="/about">O nas</Link>
            <Link to ="/contact">Kontakt</Link>
            </div>
        </div>

        <div className='rightSide'>
            <Link to ="/">Restauracja</Link>
            <Link to ="/menu">Menu</Link>
            <Link to ="/about">O nas</Link>
            <Link to ="/contact">Kontakt</Link>
            <button onClick={toggleNavbar}>
                <ImMenu3></ImMenu3>
            </button>
        </div>

    </div>
  );
}

export default Navbar;