import React from 'react';
import MultipleSushi from '../assets/sushi2.jpg';
import '../styles/About.css';
function About() {

  function whichButton(event) {
    alert("Wcisnąłeś przycisk myszy " + event.button);
  }
  
  function touchCancel() {
    document.getElementById("cancel").innerHTML = "Anulowano";
  }

  function touchStart() {
    document.getElementById("start").innerHTML = "Hello World :>";
  }

  return (
    <div className='about' onMouseDown={whichButton}>
        <div className='aboutTop' style={{backgroundImage: `url(${MultipleSushi})`}}>
        </div>
        <div className='aboutBottom'>
            <h1>O NAS</h1>
            <p onTouchCancel={touchCancel} onTouchStart={touchStart}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
            accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
            officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
            nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
            error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
            cumque velit" 
            </p>
            <p id="cancel"></p>
            <p id="start"></p>
        </div>
    </div>
  );
}

export default About;
