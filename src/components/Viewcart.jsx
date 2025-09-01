import { useContext } from "react";
import { MyContext } from "../App";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const cardContainerStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "10px",
};

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "8px",
  width: "150px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 2px 8px gray",
  position: "relative",
};

const imageStyle = {
  width: "100px",
  borderRadius: "6px",
};

function Viewcart() {
  const navigate = useNavigate();
  const cartval = useContext(MyContext);

  function removeItem(id) {
    const updatedCart = cartval.addcart.filter((item) => item.id !== id);
    cartval.setAddcart(updatedCart);
  }

  return (
    <div>
      <Navbar/>
    <div style={{ marginTop: "30px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
            alt="logo"
            style={{ height: "30px", width: "30px" }}
          />
          <h1 style={{ color: "#0769ccff", fontSize: "28px", margin: 0 }}>Your Cart</h1>
        </div>
      </div>

      <div
        style={{
          width: "60%",
          height: "520px",
          overflow: "scroll",
          border: "1px solid #0769ccff",
          boxShadow: "0 2px 8px gray",
          margin: "0 auto",
        }}
      >
        <div style={cardContainerStyle}>
          {cartval.addcart.length === 0 ? (
            <h3>Your cart is empty.</h3>
          ) : (
            cartval.addcart.map((cur) => (
              <div key={cur.id} style={cardStyle}>
                <MdOutlineCancel
                  onClick={() => removeItem(cur.id)}
                  style={{
                    color: "#0769ccff",
                    fontSize: "20px",
                    cursor: "pointer",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                />
                
                <img src={cur.image} alt={cur.title} style={imageStyle} />
                <h3>{cur.title}</h3>
                <h5>${cur.price}</h5>
                <h5>{cur.category}</h5>
              </div>
            ))
          )}
        </div>
        {cartval.addcart.length > 0 && (
          <button
            style={{
              marginLeft: "350px",
              border: "none",
              backgroundColor: "#0769ccff",
              color: "white",
              borderRadius: "9px",
              marginTop: "40px",
              padding: "10px 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/checkoutform")}
          >
            Order Now
          </button>
        )}
      </div>
    </div>
    </div>
  );
}

export default Viewcart;
