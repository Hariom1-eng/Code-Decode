import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div style={{ maxWidth: 640 }}>
            <h1>Welcome to Smart Campus</h1>
            <p className="lead">Navigate campus faster, access notes, take attendance, and learn with AI-powered helpers — all in one beautiful app.</p>
            <div className="mt-2">
              <Link to="/map" className="btn btn-light btn-lg me-2">Open Map</Link>
              <Link to="/academics" className="btn btn-outline-light btn-lg">Explore Academics</Link>
            </div>
          </div>

          <div className="mt-4 mt-lg-0" style={{ maxWidth: 280 }}>
            <div className="card-spot text-center">
              <div style={{ fontSize: 36 }}>🎓</div>
              <h5 className="mt-2">Smart Tools</h5>
              <p className="text-muted">Study resources, timetables and AI helpers at your fingertips.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="feature-grid">
          <div className="feature-card">
            <h4>Campus Map</h4>
            <p className="text-muted">Find buildings, routes and bus stops easily.</p>
          </div>
          <div className="feature-card">
            <h4>Academics</h4>
            <p className="text-muted">Syllabus, notes and resources organized for you.</p>
          </div>
          <div className="feature-card">
            <h4>AI Learning</h4>
            <p className="text-muted">Ask questions, get summaries and learning tips.</p>
          </div>
          <div className="feature-card">
            <h4>Attendance</h4>
            <p className="text-muted">Quick attendance checks and records.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        Built with ❤️ for students • Smart Campus
      </footer>
    </main>
  );
}
