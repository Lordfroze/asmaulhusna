import React from "react";

const Welcome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Selamat Datang di Aplikasi Asmaul Husna</h1>
      <p style={styles.subtitle}>
        Aplikasi untuk belajar dan menghafal 99 Nama Allah (Asmaul Husna).
      </p>
      <button style={styles.button}>
        <a className="link" style={styles.link} href="/asmaulhusna">
          Mulai Belajar
        </a>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f0f2f5",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#666",
    marginBottom: "2rem",
  },
  button: {
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Welcome;
