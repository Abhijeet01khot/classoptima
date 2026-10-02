import React , { useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import TeacherManager  from './TeacherManager';
import ClassroomManager from './ClassroomManager';

import './App.css'; 


export default function App() {
  const [user, setUser] = useState(null);
  const [adminTab,setAdminTab]=useState('teachers'); // 'teachers' or 'classrooms' only possible states.


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
        {user.role === 'admin' ? (
          <div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
              <button
                className={`btn-demo ${adminTab === 'teachers' ? 'btn-primary' : ''}`}
                onClick={() => setAdminTab('teachers')}
              >
                Faculty Manager
              </button>
              <button
                className={`btn-demo ${adminTab === 'classrooms' ? 'btn-primary' : ''}`}
                onClick={() => setAdminTab('classrooms')}
              >
                Classroom & Lab Manager
              </button>
            </div>
            {adminTab === 'teachers' && <TeacherManager />}
            {adminTab === 'classrooms' && <ClassroomManager />}
          </div>
        ) : (
          <div className="welcome-box">
            <h3>Logged in as {user.name} ({user.role})</h3>
            <p>Switch to 👑 Admin in the top bar to view Faculty and Classroom management.</p>
          </div>
        )}
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
