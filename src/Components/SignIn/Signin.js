import React, { Component } from 'react';


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            SignInEmail: '',
            SignInPassword: ''
        }
    }



    onEmailChange = (event) =>{
        this.setState({SignInEmail: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({SignInPassword: event.target.value})
    }
    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                mail: this.state.SignInEmail,
                password: this.state.SignInPassword
            })
        }).then(response => response.json())
        .then(user => {
            if(user.id){ // does the user exist? Did we receive a user with a property of id?
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }    
        })
        
    }



    render(){
        const {onRouteChange} = this.props; 
        return(
        <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--silver-10 shadow-5">
        <main className="pa4 silver-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 center">Ingresar</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange }
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
                    <input onClick={this.onSubmitSignIn} className="silver ph3 pv2 input-reset ba b--silver
                     bg-black grow pointer f6 dib" type="submit" value="Ingresar"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim silver db pointer">Registrarse</p>
                    </div>
                </div>
            </main>
        </article>    
        );
}}

export default SignIn;
                    