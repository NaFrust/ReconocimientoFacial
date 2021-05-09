import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOption = {
  particles: {
    number: {
    value: 50,
    density: {
      enable: true,
      value_area: 800 
    }
     }}}

function App() {
  return (
    <div className="App">
        <Particles className="particles" params={particlesOption}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
        {/*<FaceRecognition></FaceRecognition>*/}
        
      
      
    </div>
  );
}

export default App;
