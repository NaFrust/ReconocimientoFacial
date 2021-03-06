import React from 'react';


const Navigation = ({onRouteChange,IsSignedIn}) =>{
        if(IsSignedIn){
            return(
                    <nav style={{display:'flex', justifyContent:'flex-end'}}>
                        <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer">Salir</p>
                    </nav>
                )
        }else{  
            return (
                    <nav style={{display:'flex', justifyContent:'flex-end'}}>
                        <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Ingresar</p>
                        <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Registrarse</p>
                    </nav>
                    )
        }
  
        

   
}

export default Navigation;