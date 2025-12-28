import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// export default App

import React from "react";

function App() {
  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <h1>Smart Campus</h1>
        <p>Smart Campus Management System</p>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        <button style={styles.btn}>Dashboard</button>
        <button style={styles.btn}>Students</button>
        <button style={styles.btn}>Faculty</button>
        <button style={styles.btn}>Attendance</button>
        <button style={styles.btn}>Events</button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <h2>Welcome 👋</h2>
        <p>
          This platform helps manage campus operations including students,
          faculty, attendance, and events in one place.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>🎓 Students Module</div>
          <div style={styles.card}>👨‍🏫 Faculty Module</div>
          <div style={styles.card}>📊 Attendance Tracking</div>
          <div style={styles.card}>📅 Events & Notices</div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Smart Campus | GDG Hackathon</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f6f8",
  },
  header: {
    backgroundColor: "#1e40af",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#e5e7eb",
  },
  btn: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
  main: {
    flex: 1,
    padding: "30px",
    textAlign: "center",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#1e40af",
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
};

export default App;

