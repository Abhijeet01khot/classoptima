import React, { useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import './App.css'; // <-- Imports your clean CSS file!

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLoginSuccess={(loggedInUser) => setUser(loggedInUser)} />;
  }

  return (
    <div>
      <Navbar
        user={user}
        onLogout={() => setUser(null)}
        onSwitchRole={(newRole) => setUser({ ...user, role: newRole })}
      />

      <main className="dashboard-content">
        <h1 className="dashboard-title">Welcome, {user.name}!</h1>
        <p>Current Active Role: <span className="dashboard-role">{user.role}</span></p>

        <div className="welcome-box">
          <h3>🚀 Authentication & Role Switcher Active!</h3>
          <p>Click the tabs in the top navigation bar to test role switching between Admin, Professor, and Student.</p>
        </div>
      </main>
    </div>
  );
}
