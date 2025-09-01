import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";

function Admindashboard() {
    const val = useContext(MyContext);
    const navigate=useNavigate()

    
    const styles = {
        container: {
            maxWidth: "80%",
            overflowX: "auto",
            margin: "20px auto",
            padding: "10px",
        },
        table: {
            width: "100%",
            fontSize: "14px",
            backgroundColor: "#fff",
            boxShadow: "0 0 8px rgba(0,0,0,0.1)",
        },
        th: {
            border: "1px solid #007BFF",
            padding: "12px",
            backgroundColor: "#007BFF",
            textAlign: "center",
            color:"white"
        },
        td: {
            border: "1px solid #ddd",
            padding: "12px",
            textAlign: "left",
            verticalAlign: "top",
        },
        stripedRow: {
            backgroundColor: "#f9f9f9",
        },
        hoverRow: {
            backgroundColor: "#f1f1f1",
        },
        ol: {
            margin: 0,
            paddingLeft: "20px",
        }
    };

    return (
        <div style={{margin:"20px"}}>
            <div >
            <div style={{backgroundColor:"#007BFF",
                color:"white",
                padding:"5px",
                fontSize:"22px",
                listStyleType:"none"}}>
                <ul style={{ display:"flex",fontSize:"20px"}}>
                    <ol>< img style={{height:"45px",width:"45px"}} src="https://cdn-icons-png.flaticon.com/128/18570/18570983.png" alt="logo"/></ol>
                    <ol style={{marginTop:"13px",fontWeight:"bold",}}>Admin Dashboard</ol>
                    <ol style={{marginLeft:"800px",cursor:"pointer",marginTop:"13px"}} onClick={() => navigate("/")}>Logout</ol>
                    
                </ul>
           
            </div>
            </div>
            <div style={{marginLeft:"30px"}}>
                <h2>Admin Orders</h2>
            </div>
           
        <div style={styles.container}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>S.no</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Mobile</th>
                        <th style={styles.th}>Mail</th>
                        <th style={styles.th}>Address</th>
                        <th style={styles.th}>Payment</th>
                        <th style={styles.th}>Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        val.checkdel.map((cur, index) => (
                            <tr
                                key={index}
                                style={index % 2 === 0 ? styles.stripedRow : {}}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.hoverRow.backgroundColor}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.stripedRow.backgroundColor : "#fff"}
                            >
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{cur.cname}</td>
                                <td style={styles.td}>{cur.cmobile}</td>
                                <td style={styles.td}>{cur.cmail}</td>
                                <td style={styles.td}>{cur.caddre}</td>
                                <td style={styles.td}>{cur.cpayment}</td>
                                <td style={styles.td}>
                                    <ol style={styles.ol}>
                                        {
                                            cur.cproduct.map((product, i) => (
                                                <li key={i}>{product.title}</li>
                                            ))
                                        }
                                    </ol>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div style={{
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  textAlign: "left",
  padding: "10px",
  marginLeft:"20px"
  
}}>
  <img
    style={{
      height: "50px",
      width: "50px",
      cursor: "pointer",
    }}
    src="https://cdn-icons-png.flaticon.com/128/18094/18094450.png"
    alt=""
    onClick={() => navigate('/home')}
  />
</div>

        </div>
    );
}

export default Admindashboard;
