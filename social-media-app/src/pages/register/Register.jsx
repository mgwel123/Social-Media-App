import React from 'react';
import './register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Register() {
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
                    <Form.Control placeholder="Confirm Email" className="loginInput"/>
                    <Form.Control placeholder="Password" className="loginInput"/>
                    <Form.Control placeholder="Confirm Password" className="loginInput"/>
                    <Button variant="primary" className="registerButton">Create an Account</Button>
                    <br/>
                    <Button className="loginButton">Back to Log In</Button>
                </Form>  
            </div>
        </div>
      
    </div>
  )
}
