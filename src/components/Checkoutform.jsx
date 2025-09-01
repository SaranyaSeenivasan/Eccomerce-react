import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../App";
import Ticketanimation from "./Ticketanimation";
import { GiCash } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";
import Navbar from "./Navbar.jsx"

const Checkoutform = () => {
  const checkval = useContext(MyContext);

  const cnameRef = useRef();
  const cmobileRef = useRef();
  const cmailRef = useRef();
  const caddreRef = useRef();

  const[toggle,setToggle]=useState(false)
  const[payment,setPayment]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    checkval.setCheckdel((c) => [
      ...c,
      {
        cname: cnameRef.current.value,
        cmobile: cmobileRef.current.value,
        cmail: cmailRef.current.value,
        caddre: caddreRef.current.value,
        cpayment:payment,
        cproduct:checkval.addcart


      },
    ]);

    
    cnameRef.current.value = "";
    cmobileRef.current.value = "";
    cmailRef.current.value = "";
    caddreRef.current.value = "";

    setToggle(!toggle)
  };

 const containerStyle = {
  maxWidth: "400px",
  margin: "40px auto",
  padding: "30px 25px",
  background: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  fontSize:"20px"

};

const formGroupStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "600",
  color: "#333",
  fontSize: "18px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outlineColor: "#007BFF",
  backgroundColor: "#fff",
  transition: "border 0.2s ease",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#007BFF",
  color: "#fff",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
};
 const radio={
    marginRight:'40px'
  }

  return (
    
      
    toggle ? <Ticketanimation/> :<div>
      <Navbar/>
       <div style={containerStyle}>
      <h2 >Order Confirmation</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input type="text" ref={cnameRef} style={inputStyle} required />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Mobile</label>
          <input type="text" ref={cmobileRef} style={inputStyle} required />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Email</label>
          <input type="email" ref={cmailRef} style={inputStyle} required />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Address</label>
          <input type="text" ref={caddreRef} style={inputStyle} required />
        </div>

         <div style={formGroupStyle}>
          <p>Payment</p>
          <label htmlFor="Cash" ><GiCash /></label>
         <input style={radio} type="radio" value="Cash" id="Cash" onChange={(e)=>setPayment(e.target.value)} checked={payment === 'Cash'}/>
          <label htmlFor="Upi">UPI</label>
         <input style={radio} type="radio" value="Upi" id="Upi" onChange={(e)=>setPayment(e.target.value)} checked={payment === 'Upi'}/>
          <label htmlFor="card"><FaCreditCard /></label>
         <input style={radio} type="radio" value="card" id="card" onChange={(e)=>setPayment(e.target.value)} checked={payment === 'card'}/>
        </div>

        <button type="submit" style={buttonStyle}>Buy now</button>
      </form>
    </div>
    </div>
    

  );
};

export default Checkoutform;