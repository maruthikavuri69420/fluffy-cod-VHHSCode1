import React from 'react';

const UploadMedia = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upload Media</h1>
      <p style={styles.description}>Add and store your media securely.</p>
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
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
  },
};

export default UploadMedia;
