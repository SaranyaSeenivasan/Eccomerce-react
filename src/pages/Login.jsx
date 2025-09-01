import React, { useContext, useRef, useState } from 'react';
import { MyContext } from '../App'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const { user } = useContext(MyContext); 

  const usRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usRef.current.value;
    const password = passRef.current.value;

    const foundUser = user.find(
      (cur) => cur.usname === username && cur.password === password
    );

    if (foundUser) {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const formStyle = {
    width: '100%',
    maxWidth: '360px',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 8px 16px gray',
  };

  const labelStyle = {
    fontSize: '22px',
    marginBottom: '5px',
    display: 'block',
    color: '#333',
    fontWeight: "bold",
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: ' #0769ccff ',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#357ABD',
  };

  const errorStyle = {
    color: ' #0769ccff ',
    fontSize: '13px',
    marginBottom: '10px',
  };

  const linkStyle = {
    marginTop: '10px',
    color: 'brown',
    textAlign: 'center',
    display: 'block',
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Username</label>
        <input type="text" ref={usRef} required style={inputStyle} />

        <label style={labelStyle}>Password</label>
        <input type="password" ref={passRef} required style={inputStyle} />

      

        <button type="submit" style={buttonStyle}>Login</button>

        <span style={linkStyle} onClick={() => navigate('/signup')}>
          Don't have an account? Sign up
        </span>
      </form>
    </div>
  );
};

export default Login;
