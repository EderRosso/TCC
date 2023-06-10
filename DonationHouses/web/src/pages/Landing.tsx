import React from "react";
import '../styles/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';


function Landing() {
    return(
        <div id= "pages-landing">
        <div className= "content-wrapper">
        {/* <img src={logo} alt="Happy" />           */}
          <main>
            <h1>Donation Houses</h1>
            <h2>Leve felicidade, doe esperança para o mundo</h2>
            
            <p>
              Contribua com albergues e orfanatos e transforme o dia de muitas pessoas.
            </p>
          </main>
          <div className="location">
            <strong>Sapucaia do Sul</strong>
            <span>Rio Grande do Sul</span>
          </div>
          <p id="button"><em>Ajudar!</em></p>
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
            </Link>
        </div>
      </div>
    );
}

export default Landing