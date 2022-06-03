import React from 'react';
import './login.css';
import Form from 'react-bootstrap/Form'

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h4 className="loginLogo">SuperSocial</h4>
                <span className="loginDesc">Build your Network</span>
            </div>
            <div className="loginLRight">
                <Form />  
            </div>
        </div>
      
    </div>
  )
}
