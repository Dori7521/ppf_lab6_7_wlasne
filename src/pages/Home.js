import React from 'react';
import { Link } from 'react-router-dom'
import BannerImage from '../assets/sushi8.jpg'
import '../styles/Home.css'
function Home() {

  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Tasty Fish</h1>
            <p>Sushi na każdy smak</p>
            <Link to ="/menu">
                <button>ZAMÓW TERAZ</button>
            </Link>
            
        </div>
    </div>);
}

export default Home;
