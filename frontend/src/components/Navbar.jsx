import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    axios.get('/api/auth/me', { withCredentials: true }).then(res=>{
      setUser(res.data.user);
    }).catch(()=>{});
  }, []);

  const handleLogout = async ()=>{
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="brand-logo me-2">SC</span>
          <span>Smart Campus</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav me-auto">
            <Link className="nav-link" to="/map">Map</Link>
            <Link className="nav-link" to="/academics">Academics</Link>
            <Link className="nav-link" to="/ai">AI Learning</Link>
            <Link className="nav-link" to="/buses">Buses</Link>
            <Link className="nav-link" to="/attendance">Attendance</Link>
            <Link className="nav-link" to="/apis">APIs</Link>
            {user && user.isAdmin && <Link className="nav-link" to="/admin">Admin</Link>}
          </div>

          <div className="d-flex align-items-center">
            {user ? (
              <>
                <div className="me-3 text-white">{user.name}</div>
                <button className="btn btn-light btn-sm" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <a className="btn btn-outline-light btn-sm" href="/api/auth/google">Login</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
