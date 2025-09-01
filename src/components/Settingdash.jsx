import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Settingdash() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const navi = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#333" : "#f5f5f5";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  const containerStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    transition: "all 0.3s ease",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{padding:"60px"}}>
    <div style={containerStyle}>
      <h2>Settings</h2>

      <button style={buttonStyle} onClick={() => navi("/")}>
        Logout
      </button>

      <button
        style={secondaryButtonStyle}
        onClick={() => navi("/AdminDashboard")}
      >
        Admin Panel
      </button>

      <button style={buttonStyle} onClick={handleThemeToggle}>
        Toggle Theme ({isDarkMode ? "Dark" : "Light"})
      </button>
    </div>
    </div>
  );
}
