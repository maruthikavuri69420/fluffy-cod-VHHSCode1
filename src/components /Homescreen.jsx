import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* App Logo */}
      <img src="/Octocat.png" alt="logo" style={styles.logo} />

      {/* App Title */}
      <h1 style={styles.title}>Welcome to Memory Tracker</h1>

      {/* Description */}
      <p style={styles.description}>
        Capture and search through your memories effortlessly!
      </p>

      {/* Upload Media Button */}
      <button
        onClick={() => navigate('/upload')}
        style={{ ...styles.button, backgroundColor: '#4CAF50' }}
      >
        Upload Media
      </button>

      {/* Button Spacing */}
      <div style={styles.buttonSpacing}></div>

      {/* Search Media Button */}
      <button
        onClick={() => navigate('/search')}
        style={{ ...styles.button, backgroundColor: '#2196F3' }}
      >
        Search Media
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: '100vh',
    padding: '16px',
  },
  logo: {
    width: '120px',
    height: '120px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '160px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '200px',
  },
  button: {
    padding: '100px 200px',
    fontSize: '16px',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  },
  buttonSpacing: {
    margin: '100px',
  },
};

export default HomeScreen;
