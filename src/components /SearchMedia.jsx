import React from 'react';

const SearchMedia = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Search Media</h1>
      <p style={styles.description}>Find and relive your favorite memories.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fce4ec',
  },
  title: {
    fontSize: '240px',
    fontWeight: 'bold',
    marginBottom: '100px',
  },
  description: {
    fontSize: '160px',
    color: '#333',
    textAlign: 'center',
  },
};

export default SearchMedia;
