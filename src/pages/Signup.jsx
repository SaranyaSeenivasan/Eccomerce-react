import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import signup from '../assets/signup.png'

const Signup = () => {
  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const usRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const mailRef = useRef();
  const mobileRef = useRef();
  const passRef = useRef();
  const cpassRef = useRef();

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = passRef.current.value;
    const confirmPassword = cpassRef.current.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newUser = {
      fname: fnameRef.current.value,
      lname: lnameRef.current.value,
      usname: usRef.current.value,
      mail: mailRef.current.value,
      mobile: mobileRef.current.value,
      password,
    };

    setUser((prev) => [...prev, newUser]);

    navigate("/");
  };

  

  const formStyle = {
    maxWidth: '500px',
    padding: '10px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    marginLeft:"400px"

  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '18px',
    fontWeight: "bold",
    marginLeft:"40px",
  };

  const inputStyle = {
    width: '80%',
    padding: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '18px',
    marginLeft:"40px",

  };

  const buttonStyle = {
    width: '40%',
    padding: '8px',
    backgroundColor: ' #0769ccff ',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',marginLeft:"150px"
  
  };

  

  return (
    <div>
      <div style={{marginTop:"20px",display:"flex"}}>
        <img style={{height:"50px",
          width:"50px",
          marginLeft:"550px"
        }} src="https://cdn-icons-png.flaticon.com/128/16382/16382065.png" alt=""/>
        <h1 style={{marginLeft:"20px",
          color:" #0769ccff",
        }}>Signup</h1>
        
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>First name</label>
        <input type="text" ref={fnameRef} required style={inputStyle} />

        <label style={labelStyle}>Last name</label>
        <input type="text" ref={lnameRef} required style={inputStyle} />

        <label style={labelStyle}>Username</label>
        <input type="text" ref={usRef} required style={inputStyle} />

        <label style={labelStyle}>Email</label>
        <input type="email" ref={mailRef} required style={inputStyle} />

        <label style={labelStyle}>Mobile</label>
        <input type="tel" ref={mobileRef} pattern="[0-9]{10}" required style={inputStyle} />

        <label style={labelStyle}>Password</label>
        <input type="password" ref={passRef} required style={inputStyle} />

        <label style={labelStyle}>Confirm Password</label>
        <input type="password" ref={cpassRef} required style={inputStyle} />

        <button type="submit" style={buttonStyle}>Sign Up</button>

        {error && <p style={errorStyle}>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
