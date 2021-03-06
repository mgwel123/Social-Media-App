import React from 'react';
import './login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h4 className="loginLogo">SuperSocial</h4>
                <span className="loginDesc">Build your Network</span>
            </div>
            <div className="loginLRight">
                <Form>
                    <Form.Control placeholder="Email" className="loginInput"/>
                    <Form.Control placeholder="Password" className="loginInput"/>
                    <Button variant="primary" className="loginButton">Log In</Button>
                    <span className="loginForgotPassword">Forgot your Password?</span>
                    <Button className="registerButton">Create an Account</Button>
                </Form>  
            </div>
        </div>
      
    </div>
  )
}
