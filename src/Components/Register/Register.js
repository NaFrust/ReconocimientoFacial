import React from 'react';


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            nombre: ''
        }
    }



    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }
    onNameChange = (event) =>{
        this.setState({nombre: event.target.value})
    }

    onSubmitSignIn = () =>{
        fetch('https://pacific-plains-07601.herokuapp.com/register', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                mail: this.state.email,
                password: this.state.password,
                nombre: this.state.nombre
            })
        }).then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
        
    }
 


    render(){
      return (
        <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--silver-10 shadow-5">
            <main className="pa4 silver-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 center">Registrarse</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="Nombre">Nombre</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="nombre"  
                        id="name"
                        onChange={this.onNameChange}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Contraseña</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div className="">
                        <input onClick={this.onSubmitSignIn} className="silver ph3 pv2 input-reset ba b--silver bg-black grow pointer f6 dib" 
                        type="submit" 
                        value="Registrarse"
                        />
                    </div>
                </div>
            </main>
        </article>    
    );
}}

export default Register;