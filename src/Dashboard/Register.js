import React from 'react';
import './Register.css';

function Register() {
  return (
    <div style={{ padding: '5rem 2rem', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
      <h1 style={{ color: '#1E293B', fontSize: '36px', fontWeight: '700', marginBottom: '1rem' }}>Create Account</h1>
      <p style={{ color: '#64748B', fontSize: '18px', marginBottom: '2.5rem' }}>Set up your secure HealthSafe Cloud patient or staff account.</p>
      <a href="/login" style={{ color: '#2563EB', textDecoration: 'none', fontWeight: '600' }}>Back to Login Selection</a>
    </div>
  );
}

export default Register;
