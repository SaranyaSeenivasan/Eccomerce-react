

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import '../Style.css'



function Dashboard() {
  const cartval=useContext(MyContext)
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) =>cartval.setProduct(data));
  }, []);

   function addingCart(val) {
   cartval. product.forEach((cur) => {
      if (cur.id === val) {
        cartval.setAddcart((c) => [
          ...c,
          {
            id:cur.id,
            title: cur.title,
            price: cur.price,
            image: cur.image,
            category: cur.category,
          },
        ]);

        cur.active = true;
      }
    })
  }


  return (
    <div>
      <div style={{backgroundColor:"#0769ccff",padding:"1px",marginTop:"15px",opacity:"40%"}}>


      </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '20px',marginLeft:"35px" }}>
      {
       cartval. product.map((cur,index) => {
          return (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '15px', 
                width: '250px',
                boxShadow: '0 2px 8px gray',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img 
                src={cur.image} 
                alt={cur.image} 
                style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '10px' }} 
              />
              <h3 style={{ fontSize: '18px', margin: '5px 0', textAlign: 'center' }}>{cur.title}</h3>
               
                <h4 style={{ fontStyle: 'italic', color: '#555', margin: '5px 0' }}>{cur.category}</h4>
              <h5 style={{ color: "#0769ccff", margin: '5px 0' }}>${cur.price}</h5>
             
            <button  value={cur.active ? true : false} onClick={() => addingCart(cur.id)}>
              {cur.active ? <p>Added</p> : <p>Add to cart</p>}
            </button>
             
            </div>
          );
        })
      }
    </div>
    </div>
  );
}

export default Dashboard;
