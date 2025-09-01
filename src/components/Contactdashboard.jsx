import { useRef, useState } from "react";

function Contactdashboard() {
  const nameref = useRef();
  const mobileref = useRef();
  const emailref = useRef();
  const messageref = useRef();

  const [formdata, setFormdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((cur) => [
      ...cur,
      {
        name: nameref.current.value,
        mobile: mobileref.current.value,
        mail: emailref.current.value,
        message: messageref.current.value,
      },
    ]);
    nameref.current.value = "";
    mobileref.current.value = "";
    emailref.current.value = "";
    messageref.current.value = "";

    alert("Your message has been sent!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input style={styles.input} type="text" ref={nameref} required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input style={styles.input} type="text" ref={mobileref} required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input style={styles.input} type="email" ref={emailref} required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Message</label>
          <textarea
            ref={messageref}
            name="message"
            rows="5"
            required
            style={styles.textarea}
          />
        </div>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contactdashboard;

const styles = {
  container: {

    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#222",
    fontSize: "36px",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  },
  label: {
    color: "#333",
    fontSize: "16px",
    marginBottom: "6px",
  },
  input: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "14px",
    color: "#333",
  },
  textarea: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "14px",
    color: "#333",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
