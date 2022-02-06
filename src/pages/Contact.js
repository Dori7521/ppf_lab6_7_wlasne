import React from 'react';
import sushiLeft from '../assets/sushi4.jpg'
import '../styles/Contact.css'
function Contact() {

    function typeText (event){
      const x = event.key
      if (x === "I" || x==="i"){
        console.log('Wpisałeś literę I/i');
      }
    }

    function alertText(){
      alert('Dziękujemy! :>');
    }

    function isKeyPressed (event){
      document.getElementById("contact-form")
      if (event.shiftKey) {
        console.log("Shift jest wciśnięty");
      }
    }

    function onKeyUp() {
      let x = document.getElementById("fname");
      x.value = x.value.toUpperCase();
    }



  return (
    <div className='contact' >
        <div className='leftSide' style={{backgroundImage: `url(${sushiLeft})`}}>

        </div>
        <div className='rightSide'>
            <h1>Skontaktuj się z nami</h1>
            <form id="contact-form" method='POST'  onKeyDown={isKeyPressed}>
                <label htmlFor="name">Pełne imię</label>
                <input id = "fname" type="text" name="name" placeholder='Wpisz imię...' onKeyDown={typeText} onKeyUp={onKeyUp}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Wpisz email...'/>

                <label htmlFor="message">Wiadomość</label>
                <textarea name="message" 
                placeholder='Wpisz wiadomość...' 
                rows="6" required ></textarea>
                <button type='submit' className='sendButton' onClick={alertText}>Wyślij wiadomość</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;
