import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/Signin';
import Register from './Components/Register/Register';
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

    const initialState = {
      input: '',
      imgUrl:'',
      box:{},
      route: 'signin',
      IsSignedIn: false,
      user:{
        id: '',
        nombre: '',
        mail: '',
        entries: 0,
        joined: ''
      }} 
class App extends React.Component {
  constructor(){
    super()
    this.state= initialState;
  }

  loadUser = (userData)=>{
    this.setState( {user: {
      id: userData.id, 
      nombre: userData.nombre,
      mail: userData.mail,
      entries: userData.entries,
      joined: userData.joined
    }})

  }


  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imagen = document.getElementById('inputimage')
    const width = Number(imagen.width);
    const height = Number(imagen.height);
    return{
      leftCol:  clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col*width),
      bottomRow: height -(clarifaiFace.bottom_row * height),
    }
  }

  displayFacebox = (box) =>{
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
      fetch('http://localhost:3000/imageurl',{
        method: 'post',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({input: this.state.input})
          }).then(response => response.json())
    .then((response) => {
      if(response){
        fetch('http://localhost:3000/image',{
          method: 'put',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
        })
      }).then(response => response.json())
      .then(count =>{
        this.setState(Object.assign(this.state.user,{entries: count}))
      }).catch(console.log)
    }      
      this.displayFacebox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err + "ohhh noooo"));      
  }   
  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState(initialState)
    } else if (route ==='home'){
      this.setState({IsSignedIn: true})
    }
    this.setState({route: route})
  }      


  render(){
    const { IsSignedIn, imgUrl, route, box, } = this.state;
    return (
      <div className="App">
          <Particles className="particles" params={particlesOption}/>
          <Navigation IsSignedIn={IsSignedIn} onRouteChange={this.onRouteChange}/>
          { route === 'home' 
          ? <div> 
              <Logo/>
              <Rank name={this.state.user.nombre} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={box} imgUrl={imgUrl}/>
            </div>
          : ( 
          route === 'signin' 
          ? <SignIn loadUser={this.loadUser} onRouteChange ={this.onRouteChange}/>
          : <Register loadUser={this.loadUser} onRouteChange ={this.onRouteChange}/>
          )
         } 
         
      </div>
    );
  }
}
 
export default App;
