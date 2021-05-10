import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
//import Clarifai from 'clarifai';
import './App.css';

/*const app = new Clarifai.App({
  apiKey: 'e77030b509d54438a1da9f18dea5391a'
 });*/





const particlesOption = {
  particles: {
    number: {
    value: 50,
    density: {
      enable: true,
      value_area: 800 
    }
     }}}

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);

  }
  onButtonSubmit = () => {
    console.log('click');
  }


  render(){
    return (
      <div className="App">
          <Particles className="particles" params={particlesOption}/>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          {/*<FaceRecognition></FaceRecognition>*/}
      </div>
    );
  }
}
 
export default App;
