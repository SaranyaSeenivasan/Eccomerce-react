import { useContext, useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

function Searchbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState(""); 
  const val = useContext(MyContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        val.setProduct(data); 
      });
  }, []);

  useEffect(() => {
    if (query === "") {
      val.setProduct(allProducts); 
    } else {
      const filtered = allProducts.filter((cur) =>
        cur.title.toLowerCase().includes(query.toLowerCase())
      );
      val.setProduct(filtered);
    }
  }, [query]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <div>
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "4px",
              border: "1px solid black",
            }}
          />
        </div>

        <div>
          <LuShoppingCart
            style={{
              height: "30px",
              width: "30px",
              backgroundColor: "#007bff",
              padding: "5px",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => navigate("/viewcart")}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
