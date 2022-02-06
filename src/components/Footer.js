import React from 'react';
import { ImInstagram } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import '../styles/Footer.css';
function Footer() {

  function eventOnToggle() {
    alert("Wystąpiło zdarzenie ontoggle");
  }

  function myFunction() {
    document.getElementById("demo").innerHTML = "Ukryta wiadomość :)"; 
  }

  return (
    <div className='footer'>
        <div className='socialMedia'  onDoubleClick={myFunction}>
            <ImInstagram></ImInstagram>
            <ImFacebook2></ImFacebook2>
            <ImTwitter></ImTwitter>
            <ImLinkedin></ImLinkedin>
            <p id="demo"></p>
        </div>
        {/* <p> &copy; 2022 tastyfish.com</p> */}
        <details onToggle={eventOnToggle}>
        <summary className="stopa">&copy; 2022 tastyfish.com</summary>
        <p>Grafiki na tej stronie są pobrane z pixabay.com</p>
        </details>
    </div>
  );
}

export default Footer;
