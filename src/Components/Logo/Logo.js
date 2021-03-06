import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import LogoHumano from './LogoHumano.png';

const Logo = () =>{
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner"> 
                    <img src={LogoHumano} alt="logo"/> 
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;