import React from 'react';
import '../styles/pages/landing.css';
import {Link} from 'react-router-dom';

import {FiArrowRight} from 'react-icons/fi';
import logoImg from '../img/logo.svg';
function landing() {
    return (

        <div id= "page-landing">
        <div className="content-wrapper">
           <img src= {logoImg} alt="MoveArm"/>
           <main>
             <h1>Leve a felicidade ao mundo. 
             </h1>
             <p>Visite hospitais 
               e lares para deficiêntes físicos, doe, apoie e ajude a trazer a felicidade a
              outrem. </p>
             
           </main>
           <div className="location">
           <strong>Angola</strong>
           <span>Luanda</span>
         </div>
       
         <Link to="/app" className="enter-app">
           <FiArrowRight size={26} color=" rgba(0,0,0, 0.6)"/>
       
         </Link>
        </div>
       </div>
         );
       }
    
export default landing;