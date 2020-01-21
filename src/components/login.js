import React, { Component } from 'react';
import {PostData} from './PostData';
import './login.css';

class Login extends Component {
constructor(props){
    super(props);
    this.state={
        email:"",
        pass:""
    }
    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);
}
    login()
    {
        PostData('login',this.state).then()
    }
    onChange(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }
    
    render() { 
        return (
            <div class="main">
            <p class="sign" align="center">Login</p>
              <input class="email" type="email" align="center" placeholder="Email id" onChange={this.onChange}/>
              <input class="pass" type="password" align="center" placeholder="Password" onChange={this.onChange}/>
              <input type="button" value="Login" className="submit" onClick={this.login}/>    
            </div>
        );
    }
}
 
export default Login;